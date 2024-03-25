import { instance as axiosInstance } from "../core";
import { Endpoints } from "./constants";

export const getFilms = async () => {
  try {
    const response = await axiosInstance.get(Endpoints.FILMS);

    const data = await response.data.results;

    return data;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
};
