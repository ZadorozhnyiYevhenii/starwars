import { useEffect, useState } from "react";
import { getHeros } from "@/api/getRequests/getHeros";
import { IHero } from "@/types/IHero";

export const useFetchHeros = () => {
  const [heros, setHeros] = useState<IHero[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHeros = async () => {
      try {
        setIsLoading(true);
        const heros = await getHeros();
        setHeros(heros.results);
      } catch (error) {
        setError("Could not get the heros. Please try it again!");
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeros();
  }, []);

  return { heros, isLoading, error };
};
