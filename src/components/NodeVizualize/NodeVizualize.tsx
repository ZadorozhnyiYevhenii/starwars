"use client";

import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import { getFilms } from "@/api/getRequests/getFilms";
import { getHeroById } from "@/api/getRequests/getHeroById";
import { useFetch } from "@/hooks/useFetch";
import { IFilm } from "@/types/IFilms";
import { IHero } from "@/types/IHero";
import { UICard } from "../UI/UICard/UiCard";
import { StarshipList } from "../StarshipList/StarshipList";
import { groupHerosWithSpaceship } from "@/utils/groupHerosWithSpaceship";

let clientWidth: number;

if (typeof window !== "undefined") {
  clientWidth = window.innerWidth;
}

export const NodeVizualize = ({ id }: { id: string }) => {
  const {
    data: films,
    isLoading: filmsLoading,
  } = useFetch<IFilm[], null>(getFilms, "Could not get the films");
  const {
    data: hero,
    isLoading: heroLoading,
  } = useFetch<IHero, string>(getHeroById, "Could not get the hero", id);

  const { heroWithSpaceship} = groupHerosWithSpaceship(films, hero, id)

  const filmNodes = films?.map((film, index) => ({
    id: `film_${film.title}`,
    data: { label: <UICard card={film.title} loading={filmsLoading} /> },
    position: { x: clientWidth / 4 + index * 200, y: 300 + 1 * 100 },
    type: "default",
    targetHandle: false,
  }));

  const starshipNodes = heroWithSpaceship?.map((data, index) => ({
    id: `starship_${data.title}`,
    data: { label: <StarshipList id={data.starships} key={index} /> },
    position: { x: clientWidth / 4 + index * 300, y: 500 + 1 * 100 },
    type: "default",
    targetHandle: false,
  }));

  const heroNode = {
    id: "hero",
    label: hero?.name,
    data: { label: hero?.name },
    position: { x: clientWidth / 2, y: 100 },
    sourceHandle: true,
  };

  const edges = filmNodes?.map((filmNode, index) => ({
    id: `edge_${index}`,
    source: "hero",
    target: filmNode.id,
    label: "Hero played here",
  }));

  const starshipEdges = heroWithSpaceship?.map((data) => ({
    id: `edge_${data.title}`,
    source: `film_${data.title}`,
    target: `starship_${data.title}`,
    label: `${hero?.name} flew on:`,
  }));

  const nodes = [heroNode, ...(filmNodes || []), ...(starshipNodes || [])];

  const allEdges = [...(edges || []), ...(starshipEdges || [])];

  return (
    <div className="h-screen w-screen relative flex justify-center align-middle">
      <ReactFlow
        nodes={nodes}
        edges={allEdges}
        zoomOnScroll={false}
      ></ReactFlow>
    </div>
  );
};
