export type Article = {
  id: number;
  attributes: {
    title: string;
    author: string;
    published: string;
    description: string;
    updatedAt?: string;
    slug: string;
    thumbnail: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    content: {
      type: string;
      children: ArticleChildren[];
      level?: number;
    }[];
    tags: {
      data: {
        id: number;
        attributes: {
          tag: string;
        };
      }[];
    };
  };
};

type ArticleChildren = {
  type: string;
  format?: string;
  url: string;
  children?: ArticleNestedChild[];
  text: string;
  bold?: boolean;
  italic?: boolean;
};

type ArticleNestedChild = {
  type: string;
  text: string;
  bold?: boolean;
  italic?: boolean;
};
