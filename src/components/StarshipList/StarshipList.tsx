"use client";

import { getSpaceshipById } from "@/api/getRequests/getSpaceshipById";
import { useFetch } from "@/hooks/useFetch";
import { UILoader } from "../UI/UILoader/UILoader";
import { UILabel } from "../UI/UILabel/UILabel";

export const StarshipList = ({ id }: { id: number[] }) => {
  const { data, isLoading } = useFetch(getSpaceshipById, "e", id);
  return (
    <>
      {isLoading && <UILoader />}
      <ul className="flex flex-col gap-2">
        {data?.map((film) => (
          <li key={film.model}>
            <UILabel label={film.name} color="blue" />
          </li>
        ))}
      </ul>
    </>
  );
};
