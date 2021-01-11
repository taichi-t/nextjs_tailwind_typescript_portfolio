export interface Work {
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

export interface IWork extends Work {
  id: string;
}
