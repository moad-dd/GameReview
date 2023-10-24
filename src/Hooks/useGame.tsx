/* eslint-disable @typescript-eslint/no-unused-vars */
import apiClient from "../service/api-client";
import { useEffect, useState } from "react";
import { CanceledError } from "axios";

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

interface FetchResponseGame {
  count: string;
  results: game[];
}

const useGame = () => {
  const [Games, setGame] = useState<game[]>([]);
  const [Error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchResponseGame>("/games", { signal: controller.signal })
      .then((Response) => setGame(Response.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => {
      controller.abort();
    };
  }, []);
  return { Games, Error };
};

export default useGame;
