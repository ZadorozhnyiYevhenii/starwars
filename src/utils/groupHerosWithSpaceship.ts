import { IFilm } from "@/types/IFilms";
import { IHero } from "@/types/IHero";

export const groupHerosWithSpaceship = (films: IFilm[] | null, hero: IHero | null, id: string) => {
  const filmsForHero = films
    ?.filter((film) => film.characters.includes(+id))
    .map((film) => ({ title: film.title, starships: film.starships }));

  const heroWithSpaceship = filmsForHero?.map((film) => ({
    title: film.title,
    starships: film.starships.filter((star) => hero?.starships.includes(star)),
  })).filter((t) => t.starships.length);

  return { heroWithSpaceship}
}