import { useEffect, useState } from "react";

export const useFetch = <T, K>(
  apiCall: (arg?: K) => Promise<T>,
  errorMessage: string,
  arg?: K,
) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await apiCall(arg);

        setData(response);
      } catch (error) {
        console.error(error);
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};
