"use client";

import { getFilms } from "@/api/getRequests/getFilms";
import { getHeroById } from "@/api/getRequests/getHeroById";
import { useFetch } from "@/hooks/useFetch";
import { IFilm } from "@/types/IFilms";
import { IHero } from "@/types/IHero";

export const NodeVizualize = ({ id }: { id: string }) => {
  const {
    data: films,
    error: filmsError,
    isLoading: filmsLoading,
  } = useFetch<IFilm[], null>(getFilms, "Could not get the films");
  const {
    data: hero,
    error: heroError,
    isLoading: heroLoading,
  } = useFetch<IHero, string | "">(getHeroById, "Could not get the hero", id);

  const filmsForHero = films
    ?.filter((film) => film.characters.includes(+id))
    .map((film) => film.title);

  return (
    <div>
      <span>{hero?.name}</span>
      {filmsForHero}
    </div>
  );
};
