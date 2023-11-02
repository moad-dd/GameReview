/* eslint-disable @typescript-eslint/no-unused-vars */
import Platforms from "../data/Platforms";

/* eslint-disable @typescript-eslint/no-unused-vars */
export interface platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => ({
  data: Platforms.results,
  Error: null,
});

export default usePlatform;
