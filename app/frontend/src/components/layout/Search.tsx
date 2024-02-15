import { useForm } from "react-hook-form";
import { Input } from "../ui/Input";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../ui/Button";
import { useToast } from "../ui/use-toast";
import { Article, NewsResponse } from "@/types/news-api";

const schema = yup.object().shape({
  q: yup.string().required(),
});

type FormData = yup.InferType<typeof schema>;

type SearchProps = {
  setArticles: (articles: Article[]) => void;
  setLoading: (loading: boolean) => void;
};

export function Search({ setArticles, setLoading }: SearchProps) {
  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const { toast } = useToast();

  async function submit(data: FormData) {
    try {
      setLoading(true);
      const query = new URLSearchParams(data).toString();
      const $response = await fetch(`${import.meta.env.VITE_API_URL}?${query}`);

      const response: NewsResponse = await $response.json();
      setArticles(response?.articles);
      setLoading(false);
    } catch (error) {
      toast({
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="w-full md:w-2/3 px-4 md:px-0">
      <form
        onSubmit={handleSubmit(submit)}
        className="flex flex-1 items-center gap-1"
      >
        <Input {...register("q")} placeholder="What are you looking for?" />
        <Button type="submit" variant="outline" className="h-14">
          Search
        </Button>
      </form>
    </div>
  );
}
