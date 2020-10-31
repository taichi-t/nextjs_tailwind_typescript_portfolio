export interface Work {
    title: string;
    data: string;
    tags: string[];
    role: string;
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
        titl: string;
      };
      prev: {
        src: string;
        title: string;
      };
    };
    contentHtml: JSX.Element | string;
  };


