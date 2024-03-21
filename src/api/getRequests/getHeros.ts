import { instance } from "../core";
import { IResponse } from "@/types/IResponse";

export const getHeros = async (page?: string) => {
  try {
    const herosReponse = await instance.get(page || 'https://sw-api.starnavi.io/people');

    const heros: IResponse = await herosReponse.data;

    return heros;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
};

// export const getHerosWithUrl = async (url: string) => {
//   try {
//     const herosReponse = await instance.get(url);

//     const heros: IResponse = await herosReponse.data;

//     return heros;
//   } catch (error) {
//     console.error(error);
//     throw new Error();
//   }
// };
