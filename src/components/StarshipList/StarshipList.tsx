"use client";

import { getSpaceshipByIds } from "@/api/getRequests/getSpaceshipById";
import { useFetch } from "@/hooks/useFetch";
import { UILoader } from "../UI/UILoader/UILoader";
import { UILabel } from "../UI/UILabel/UILabel";
import { Errors } from "@/api/getRequests/constants";
import { IStarship } from "@/types/IStarship";

export const StarshipList = ({ id }: { id: number[] }) => {
  const { data: starships, isLoading } = useFetch<IStarship[], number[]>(
    getSpaceshipByIds as () => Promise<IStarship[]>,
    Errors.SPACESHIP,
    id
  );
  return (
    <>
      {isLoading && <UILoader />}
      <ul className="flex flex-col gap-2">
        {starships?.map((starship) => (
          <li key={starship.model}>
            <UILabel label={starship.name} color="blue" />
          </li>
        ))}
      </ul>
    </>
  );
};
