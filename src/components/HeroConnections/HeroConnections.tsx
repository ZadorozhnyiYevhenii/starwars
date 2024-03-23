"use client";

import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import { getFilms } from "@/api/getRequests/getFilms";
import { getHeroById } from "@/api/getRequests/getHeroById";
import { useFetch } from "@/hooks/useFetch";
import { IFilm } from "@/types/IFilms";
import { IHero } from "@/types/IHero";
import { StarshipList } from "../StarshipList/StarshipList";
import { groupHerosWithStarship } from "@/helpers/groupHerosWithStarship";
import { UILabel } from "../UI/UILabel/UILabel";
import { Errors } from "@/api/getRequests/constants";

let clientWidth: number;

if (typeof window !== "undefined") {
  clientWidth = window.innerWidth;
}

export const HeroConnections = ({ id }: { id: string }) => {
  const { data: films, isLoading: filmsLoading } = useFetch<IFilm[]>(
    getFilms,
    Errors.FILMS
  );
  const { data: hero, isLoading: heroLoading } = useFetch<IHero, string>(
    getHeroById as () => Promise<IHero>,
    Errors.HERO,
    id
  );

  const { heroWithStarship } = groupHerosWithStarship(
    films as IFilm[],
    hero as IHero,
    id
  );

  const nodes = [
    {
      id: "hero",
      label: hero?.name,
      data: { label: <UILabel label={hero?.name} /> },
      position: { x: clientWidth / 2.2, y: 100 },
      sourceHandle: true,
    },
    ...(films?.map((film, index) => ({
      id: `film_${film.title}`,
      data: {
        label: (
          <UILabel label={film.title} loading={filmsLoading} color="purple" />
        ),
      },
      position: { x: clientWidth / 4.4 + index * 200, y: 300 + 1 * 100 },
      targetHandle: false,
    })) || []),
    ...(heroWithStarship?.map((data, index) => ({
      id: `starship_${data.title}`,
      data: { label: <StarshipList id={data.starships} key={index} /> },
      position: { x: clientWidth / 4.4 + index * 300, y: 500 + 1 * 100 },
      targetHandle: false,
    })) || []),
  ];

  const edges = [
    ...(films?.map((filmNode, index) => ({
      id: `edge_${index}`,
      source: "hero",
      target: `film_${filmNode.title}`,
      label: "Played here",
    })) || []),
    ...(heroWithStarship?.map((data) => ({
      id: `edge_${data.title}`,
      source: `film_${data.title}`,
      target: `starship_${data.title}`,
      label: `${hero?.name} flew on:`,
    })) || []),
  ];

  return (
    <div className="h-screen w-screen relative flex justify-center flex-col items-center">
      <h1 className="text-center mt-12 text-xl text-cyan-600">{hero?.name}</h1>
      <ReactFlow nodes={nodes} edges={edges} zoomOnScroll={false}></ReactFlow>
    </div>
  );
};
