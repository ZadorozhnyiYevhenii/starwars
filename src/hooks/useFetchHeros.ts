import { useEffect, useState } from "react";
import { getHeros } from "@/api/getRequests/getHeros";
import { IHero } from "@/types/IHero";

export const useFetchHeros = () => {
  const [heros, setHeros] = useState<IHero[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [nextPageUrl, setNextPageUrl] = useState<string>('');

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
  }, []);


  const fetchNextPage = async () => {
    if (nextPageUrl) {
      try {
        setIsLoading(true);
        const response = await getHeros(nextPageUrl);
        setHeros((prevHeros) => [...prevHeros, ...response.results]);
        setNextPageUrl(response.next);
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
