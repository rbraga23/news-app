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

export enum SearchIn {
  Title = 'title',
  Description = 'description',
  Content = 'content',
}

export enum Category {
  Business = 'business',
  Entertainment = 'entertainment',
  General = 'general',
  Health = 'health',
  Science = 'science',
  Sports = 'sports',
  Technology = 'technology',
}

export enum SortBy {
  Relevancy = 'relevancy',
  Popularity = 'popularity',
  PublishedAt = 'publishedAt',
}
