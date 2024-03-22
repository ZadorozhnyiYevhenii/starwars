import { instance } from "../core";
import { IResponse } from "@/types/IResponse";

export const getHeros = async (page?: string) => {
  try {
    const herosReponse = await instance.get(page || '/people');

    const heros: IResponse = await herosReponse.data;

    return heros;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
};
