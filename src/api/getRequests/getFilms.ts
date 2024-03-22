import { IResponse } from "@/types/IResponse";
import { instance } from "../core";

export const getFilms = async () => {
  try {
    const response = await instance.get('/films');

    const data = await response.data.results;

    return data;
  } catch (error) {
    console.error(error);
    throw new Error;
  }
}