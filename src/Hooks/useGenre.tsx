/* eslint-disable @typescript-eslint/no-unused-vars */
import useData from "./useData";

export interface genre {
  id: number;
  name: string;
}

const useGenre = () => useData<genre>("/genres");

export default useGenre;
