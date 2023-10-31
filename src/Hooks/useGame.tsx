/* eslint-disable @typescript-eslint/no-unused-vars */
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

const useGame = (
  SelectedGenre: genre | null,
  SelectedPlatform: platform | null
) =>
  useData<game>(
    "/games",
    { params: { genres: SelectedGenre?.id, platforms: SelectedPlatform?.id } },
    [SelectedGenre?.id, SelectedPlatform?.id]
  );

export default useGame;
