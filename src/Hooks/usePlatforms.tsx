import useData from "./useData";

/* eslint-disable @typescript-eslint/no-unused-vars */
export interface platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => useData<platform>("/platforms/lists/parents");

export default usePlatform;
