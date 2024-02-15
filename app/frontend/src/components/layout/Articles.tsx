import { Article } from "@/types/news-api";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import dayjs from "dayjs";

type ArticlesProps = {
  articles: Article[];
};

export function Articles({ articles }: ArticlesProps) {
  function handleArticleClick(url: string) {
    window.open(url, "_blank");
  }

  return (
    <div className="w-full md:w-2/3 px-2 md:px-0 mt-8">
      {articles.map((article) => (
        <Card
          key={article.url}
          className="mt-4 cursor-pointer"
          onClick={() => handleArticleClick(article.url)}
        >
          <CardHeader className="p-2">
            <CardTitle className="text-md">{article.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm py-1 px-2">
            <div>{article.description}</div>
            <div className="text-xs mt-4 text-muted-foreground font-semibold">
              {dayjs(article.publishedAt).format("DD/MM/YYYY")}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
