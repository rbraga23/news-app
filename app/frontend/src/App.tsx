import { useState } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Search } from "./components/layout/Search";
import { Toaster } from "./components/ui/Toaster";
import { Articles } from "./components/layout/Articles";
import { Spinner } from "./components/ui/Spinner";
import { Article } from "./types/news-api";

export function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <main className="min-h-screen pb-4 bg-gray-100 dark:bg-slate-900">
      <Navbar />
      <div className="flex flex-col items-center w-full mt-20">
        <Search setArticles={setArticles} setLoading={setLoading} />
        {loading ? <Spinner /> : <Articles articles={articles} />}
      </div>
      <Toaster />
    </main>
  );
}
