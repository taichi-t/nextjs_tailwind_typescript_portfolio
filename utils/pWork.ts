//test

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import { IWork, Work } from '@/types/works';
import { DEFAULT_LOCALE } from '@/constants/config';

const workDirectory = path.join(process.cwd(), 'works');

export function getAllWorkIds(locales: string[]) {
  const fileNames = fs
    .readdirSync(`${workDirectory}/${DEFAULT_LOCALE}`)
    .map((fileName) => {
      return path.basename(fileName, '.md');
    });
  const paths: string[] = locales.reduce(
    (acc, next) => [
      ...acc,
      ...fileNames.map((id) => ({
        params: {
          id,
        },
        locale: next,
      })),
    ],
    []
  );
  return {
    paths,
  };
}

export function getSortedWorksData() {
  const folderNames = fs.readdirSync(`${workDirectory}/${DEFAULT_LOCALE}`);
  const allWorksData = folderNames.map((folderName) => {
    const id = folderName;
    const fullPath = path.join(
      workDirectory,
      `${DEFAULT_LOCALE}/${folderName}.md`
    );
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

export async function getWorkData(id: string, locale: string) {
  const fullPath = path.join(workDirectory, `${locale}/${id}.md`);
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
  fileNames: string[],
  locale: string
): Promise<{ [key: string]: IWork }> {
  let works = {};
  let index = 1;

  for (let fileName of fileNames) {
    let data = await getWorkData(fileName, locale);
    works[`card${index}`] = data;
    index++;
  }
  return works;
}
