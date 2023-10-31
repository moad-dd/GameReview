/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import apiClient from "../service/api-client";
import { useEffect, useState } from "react";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponseGenres<T> {
  count: string;
  results: T[];
}

function useGenre<T>(
  endPoint: string,
  RequestConfig?: AxiosRequestConfig,
  Deps?: any[]
) {
  const [data, setData] = useState<T[]>([]);
  const [Error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);
  useEffect(
    () => {
      setLoading(true);
      const controller = new AbortController();
      apiClient
        .get<FetchResponseGenres<T>>(endPoint, {
          signal: controller.signal,
          ...RequestConfig,
        })
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
    },
    Deps ? [...Deps] : []
  );
  return { data, Error, isLoading };
}

export default useGenre;
