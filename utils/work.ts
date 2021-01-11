import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import { IWork, Work } from '@/types/works';

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
  matterResult.data.contentHtml = await processedContent.toString();
  return {
    id,
    ...(matterResult.data as Work),
  };
}

export async function getSelectedWorkData(
  fileNames: string[]
): Promise<{ [key: string]: IWork }> {
  let works = {};
  let index = 1;

  for (let fileName of fileNames) {
    let data = await getWorkData(fileName);
    works[`card${index}`] = data;
    index++;
  }
  return works;
}
