import useData from "./useData";

/* eslint-disable @typescript-eslint/no-unused-vars */
interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => useData<Platform>("/platforms/lists/parents");

export default usePlatform;
