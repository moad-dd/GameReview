/* eslint-disable @typescript-eslint/no-unused-vars */
import Genres from "../data/Genres";

export interface genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => ({
  data: Genres.results,
  isLoading: false,
  Error: null,
});

export default useGenre;
