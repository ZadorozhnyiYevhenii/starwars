"use client";

import { getSpaceshipById } from "@/api/getRequests/getSpaceshipById";
import { useFetch } from "@/hooks/useFetch";
import { UICard } from "@/components/UI/UICard/UiCard";
import { UILoader } from "../UI/UILoader/UILoader";

export const StarshipList = ({ id }: { id: number[] }) => {
  const { data, isLoading } = useFetch(getSpaceshipById, "e", id);
  return (
    <>
      {isLoading && <UILoader />}
      <ul>
        <li>
          {data?.map((film) => (
            <UICard card={film.name} key={film.model} />
          ))}
        </li>
      </ul>
    </>
  );
};
