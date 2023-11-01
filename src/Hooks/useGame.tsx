/* eslint-disable @typescript-eslint/no-unused-vars */
import { GameQuery } from "../App";
import useData from "./useData";
import { genre } from "./useGenre";
import { platform } from "./usePlatforms";

export interface game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: { platform: platform }[];
  metacritic: number;
}

const useGame = (gameQuery: GameQuery) =>
  useData<game>(
    "/games",
    {
      params: {
        genres: gameQuery.Genre?.id,
        platforms: gameQuery.Platform?.id,
      },
    },
    [gameQuery]
  );

export default useGame;
