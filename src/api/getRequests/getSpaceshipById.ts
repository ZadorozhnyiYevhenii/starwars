import { IStarship } from "@/types/IStarship";
import { instance } from "../core";
import { Endpoints } from "./constants";

export const getSpaceshipByIds = async (ids: number[]) => {
  try {
    if (!ids || ids.length === 0) {
      return [];
    }

    const responses = await Promise.all(
      ids.map((i) => instance.get(`${Endpoints.STARSHIPS}/${i}/`))
    );

    const starships: IStarship[] = responses.map((response) => response.data);

    return starships;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
};
