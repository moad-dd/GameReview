/* eslint-disable @typescript-eslint/no-unused-vars */
import apiClient from "../service/api-client";
import { useEffect, useState } from "react";
import { CanceledError } from "axios";

export interface genre {
  id: number;
  name: string;
}

interface FetchResponseGenres {
  count: string;
  results: genre[];
}

const useGenre = () => {
  const [Genres, setGenre] = useState<genre[]>([]);
  const [Error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchResponseGenres>("/genres", { signal: controller.signal })
      .then((Response) => {
        setGenre(Response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);
  return { Genres, Error, isLoading };
};

export default useGenre;
