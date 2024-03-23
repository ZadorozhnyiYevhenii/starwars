import { IHero } from "@/types/IHero";
import { instance } from "../core";
import { Endpoints } from "./constants";

export const getHeroById = async (id: string) => {
  try {
    const response = await instance.get(`${Endpoints.PEOPLE}/${id}`);

    const data: IHero = response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw new Error;
  }
}