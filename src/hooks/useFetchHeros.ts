import { useEffect, useState } from "react";
import { getHeros } from "@/api/getRequests/getHeros";
import { IHero } from "@/types/IHero";

export const useFetchHeros = (initialPage: number = 1) => {
  const [heros, setHeros] = useState<IHero[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeros = async () => {
      try {
        setIsLoading(true);
        const heros = await getHeros();
        setHeros((prevHeros) => [...prevHeros, ...heros.results]);
        setNextPageUrl(heros.next);
      } catch (error) {
        setError("Could not get the heros. Please try it again!");
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeros();
  }, [initialPage]);

  const fetchNextPage = async () => {
    if (nextPageUrl) {
      try {
        setIsLoading(true);
        const response = await fetch(nextPageUrl);
        const data = await response.json();
        setHeros((prevHeros) => [...prevHeros, ...data.results]);
        setNextPageUrl(data.next);
      } catch (error) {
        setError("Could not get the next page of heros. Please try it again!");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return { heros, isLoading, error, fetchNextPage };
};
