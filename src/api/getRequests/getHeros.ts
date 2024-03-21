import { instance } from "../core";
import { IResponse } from "@/types/IResponse";

export const getHeros = async () => {
  try {
    const herosReponse = await instance.get("people");

    const heros: IResponse = await herosReponse.data;

    return heros;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
};
