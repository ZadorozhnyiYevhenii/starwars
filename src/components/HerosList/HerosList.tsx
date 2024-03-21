"use client";

import { useEffect, useRef } from "react";
import { Hero } from "../Hero/Hero";
import { useFetchHeros } from "@/hooks/useFetchHeros";
import { UILoader } from "../UI/UILoader/UILoader";
import { UIAlertMessage } from "../UI/UIAlertMessage/UIAlertMessage";

export const HerosList = () => {
  const { heros, error, isLoading, fetchNextPage } = useFetchHeros();
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      {
        threshold: 0.5,
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
      <div id="bottom" className="h-10" />
    </ul>
  );
};
