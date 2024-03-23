"use client";

import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import { getFilms } from "@/api/getRequests/getFilms";
import { getHeroById } from "@/api/getRequests/getHeroById";
import { useFetch } from "@/hooks/useFetch";
import { IFilm } from "@/types/IFilms";
import { IHero } from "@/types/IHero";
import { StarshipList } from "../StarshipList/StarshipList";
import { groupHerosWithSpaceship } from "@/utils/groupHerosWithSpaceship";
import { UILabel } from "../UI/UILabel/UILabel";
import { UILoader } from "../UI/UILoader/UILoader";

let clientWidth: number;

if (typeof window !== "undefined") {
  clientWidth = window.innerWidth;
}

export const HeroConnections = ({ id }: { id: string }) => {
  const { data: films, isLoading: filmsLoading } = useFetch<IFilm[], null>(
    getFilms,
    "Could not get the films"
  );
  const { data: hero, isLoading: heroLoading } = useFetch<IHero, string>(
    getHeroById,
    "Could not get the hero",
    id
  );

  const { heroWithSpaceship } = groupHerosWithSpaceship(films, hero, id);

  const filmNodes = films?.map((film, index) => ({
    id: `film_${film.title}`,
    data: { label: <UILabel label={film.title} loading={filmsLoading} color="purple" /> },
    position: { x: clientWidth / 4.4 + index * 200, y: 300 + 1 * 100 },
    targetHandle: false,
  }));

  const starshipNodes = heroWithSpaceship?.map((data, index) => ({
    id: `starship_${data.title}`,
    data: { label: <StarshipList id={data.starships} key={index} /> },
    position: { x: clientWidth / 4.4 + index * 300, y: 500 + 1 * 100 },
    targetHandle: false,
  }));

  const heroNode = {
    id: "hero",
    label: hero?.name,
    data: { label: <UILabel label={hero?.name} /> },
    position: { x: clientWidth / 2.2, y: 100 },
    sourceHandle: true,
  };

  const edges = filmNodes?.map((filmNode, index) => ({
    id: `edge_${index}`,
    source: "hero",
    target: filmNode.id,
    label: "Played here",
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
    <div className="h-screen w-screen relative flex justify-center flex-col items-center">
      {heroLoading ? (
        <UILoader />
      ) : (
        <>
          <h1 className="text-center mt-12 text-xl text-cyan-600">
            {hero?.name}`s connections
          </h1>
          <ReactFlow
            nodes={nodes}
            edges={allEdges}
            zoomOnScroll={false}
          ></ReactFlow>
        </>
      )}
    </div>
  );
};
