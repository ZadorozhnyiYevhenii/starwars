"use client"

import { Hero } from "../Hero/Hero";
import { useFetchHeros } from "@/hooks/useFetchHeros";
import { UILoader } from "../UI/UILoader/UILoader";
import { UIAlertMessage } from "../UI/UIAlertMessage/UIAlertMessage";

export const HerosList = () => {
  const { heros, error, isLoading } = useFetchHeros();

  return (
    <ul>
      {isLoading && <UILoader />}
      {error && <UIAlertMessage title={error} status='error' />}
      {heros.map(hero => (
        <Hero key={hero.name} hero={hero} />
      ))}
    </ul>
  );
};
