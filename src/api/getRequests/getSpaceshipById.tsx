import { IStarship } from "@/types/IStarship";
import { instance } from "../core";

export const getSpaceshipById = async (id: number[] | undefined) => {
  try {
    if (!id || id.length === 0) {
      return [];
    }

    const responses = await Promise.all(
      id.map(i => instance.get(`starships/${i}/`))
    );

    const starships: IStarship[] = responses.map(response => response.data);

    return starships;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch starships by id");
  }
};
