import { IHero } from "@/types/IHero";
import { BASE_URL, instance } from "../core";

export const getHeroById = async (id: string | undefined) => {
  try {
    const response = await instance.get(`/people/${id}`);

    const data: IHero = response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw new Error;
  }
}