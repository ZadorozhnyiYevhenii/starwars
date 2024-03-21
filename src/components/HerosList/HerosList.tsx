"use client";

import { useEffect, useRef } from "react";
import { Hero } from "../Hero/Hero";
import { useFetchHeros } from "@/hooks/useFetchHeros";
import { UILoader } from "../UI/UILoader/UILoader";
import { UIAlertMessage } from "../UI/UIAlertMessage/UIAlertMessage";

export const HerosList = () => {
  const { heros, error, isLoading, fetchNextPage } = useFetchHeros();
  const observer = useRef<IntersectionObserver | null>(null);
  const isFetching = useRef(false);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetching.current) {
          isFetching.current = true;
          fetchNextPage().then(() => {
            isFetching.current = false;
          });
        }
      },
      {
        threshold: 1,
      }
    );

    const currentObserver = observer.current;
    const bottomElement = document.getElementById("bottom")!;

    if (currentObserver) {
      currentObserver.observe(bottomElement);
    }

    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  }, [fetchNextPage]);

  return (
    <ul className="flex flex-col gap-14 my-14">
      {error && <UIAlertMessage title={error} status="error" />}
      {heros.map((hero, index) => (
        <li key={index}>
          <Hero hero={hero} />
        </li>
      ))}
      {isLoading && (
        <div className="flex justify-center">
          <UILoader />
        </div>
      )}
      <div id="bottom" className="h-40" />
    </ul>
  );
};
