/* eslint-disable @typescript-eslint/no-unused-vars */
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGame = () => useData<game>("/games");

export default useGame;
