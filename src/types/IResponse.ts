import { IHero } from "./IHero";

export interface IResponse {
  count: number;
  next: string;
  previous: string;
  results: IHero[];
}