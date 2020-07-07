import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'public/MDfiles');

export function getAllWorkIds() {
  const folderNames = fs.readdirSync(postsDirectory);
  return folderNames.map((folderName) => {
    return {
      params: {
        id: folderName,
      },
    };
  });
}

export function getSortedWorksData() {
  // Get file names under /posts

  const folderNames = fs.readdirSync(postsDirectory);
  const allPostsData = folderNames.map((folderName) => {
    // Remove ".md" from file name to get id
    const id = folderName;

    // Read markdown file as string
    const fullPath = path.join(
      postsDirectory,
      `${folderName}/${folderName}.md`
    );
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getWorkData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}/${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as { title: string }),
  };
}
