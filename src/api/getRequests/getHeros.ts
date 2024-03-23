import { instance } from "../core";
import { IResponse } from "@/types/IResponse";
import { Endpoints } from "./constants";

export const getHeros = async (page?: string) => {
  try {
    const herosReponse = await instance.get(page || Endpoints.PEOPLE);

    const heros: IResponse = await herosReponse.data;

    return heros;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
};
