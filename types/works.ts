export interface Work {
  id: string;
  title: string;
  date: string;
  tags: string[];
  role: string[];
  webLink: string;
  githubLink: string;
  image: {
    src: string;
    alt: string;
  };
  thumbnail: {
    src: string;
    alt: string;
  };
  links: {
    next: {
      src: string;
      title: string;
    };
    prev: {
      src: string;
      title: string;
    };
  };
  contentHtml: string;
}
