"use client"

import { Hero } from "../Hero/Hero";
import { useFetchHeros } from "@/hooks/useFetchHeros";

export const HerosList = () => {
  const { heros, error, isLoading } = useFetchHeros();

  return (
    <ul>
      {heros.map(hero => (
        <Hero key={hero.name} hero={hero} />
      ))}
    </ul>
  );
};
