/* eslint-disable @typescript-eslint/no-unused-vars */
import useData from "./useData";
import { genre } from "./useGenre";

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

const useGame = (SelectedGenre: genre | null) =>
  useData<game>("/games", { params: { genres: SelectedGenre?.id } }, [
    SelectedGenre?.id,
  ]);

export default useGame;
