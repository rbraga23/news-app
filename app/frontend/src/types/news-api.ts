export type Article = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date | string;
  content: string;
};

export type NewsResponse = {
  status: string;
  totalResults: number;
  articles: Article[];
};
