/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import apiClient from "../service/api-client";
import { useEffect, useState } from "react";
import { CanceledError } from "axios";

interface FetchResponseGenres<T> {
  count: string;
  results: T[];
}

function useGenre<T>(endPoint: string) {
  const [data, setData] = useState<T[]>([]);
  const [Error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchResponseGenres<T>>(endPoint, { signal: controller.signal })
      .then((Response) => {
        setData(Response.data.results);
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
  return { data, Error, isLoading };
}

export default useGenre;
