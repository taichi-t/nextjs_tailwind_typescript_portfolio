import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

type GetAllWorkIds = {
  params: {
      id: string;
  };
}[]

type GetSortedWorksData = {
  date: string;
  title: string;
  id: string;
}[]

type GetWorkData = {
    title: string;
    id: string;
    contentHtml: string;
}

const workDirectory = path.join(process.cwd(), 'public/MDfiles');

export function getAllWorkIds():GetAllWorkIds{
  const folderNames = fs.readdirSync(workDirectory);
  return folderNames.map((folderName) => {
    return {
      params: {
        id: folderName,
      },
    };
  });
}

export function getSortedWorksData():GetSortedWorksData {
  const folderNames = fs.readdirSync(workDirectory);
  const allWorksData = folderNames.map((folderName) => {
    const id = folderName;
    const fullPath = path.join(
      workDirectory,
      `${folderName}/${folderName}.md`
    );
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
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

export async function getWorkData(id:string):Promise<GetWorkData>{
  const fullPath = path.join(workDirectory, `${id}/${id}.md`);
  const fileContents =  fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    id,
    contentHtml,
    ...(matterResult.data as { title: string }),
  };
}
