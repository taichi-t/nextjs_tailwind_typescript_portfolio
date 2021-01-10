import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import { Work } from '@/types/works';

const workDirectory = path.join(process.cwd(), 'public/MDfiles');

export function getAllWorkIds() {
  const folderNames = fs.readdirSync(workDirectory);
  return folderNames.map((folderName) => {
    return {
      params: {
        id: folderName,
      },
    };
  });
}

export function getSortedWorksData() {
  const folderNames = fs.readdirSync(workDirectory);
  const allWorksData = folderNames.map((folderName) => {
    const id = folderName;
    const fullPath = path.join(workDirectory, `${folderName}/${folderName}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return {
      id,
      ...(matterResult.data as Work),
    };
  });

  return allWorksData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getWorkData(id: string) {
  const fullPath = path.join(workDirectory, `${id}/${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  matterResult.data.contentHtml = processedContent.toString();
  return {
    id,
    ...(matterResult.data as Work),
  };
}

export async function getSelectedWorkData(
  fileNames: string[]
): Promise<{ [key: string]: Work }> {
  let works = {};
  await fileNames.forEach(async (fileName, index) => {
    let data = await getWorkData(fileName);
    works[`card${index + 1}`] = data;
  });
  return works;
}
