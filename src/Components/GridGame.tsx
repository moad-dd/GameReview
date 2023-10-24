/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { Container, Text, list } from "@chakra-ui/react";

interface game {
  id: number;
  name: string;
  slug: string;
}

interface FetchResponseGame {
  count: string;
  results: game[];
}
const GridGame = () => {
  const [Game, setGame] = useState<game[]>([]);
  const [Error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchResponseGame>("/games")
      .then((Response) => setGame(Response.data.results))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <Container>
      {Error && <Text>{Error}</Text>}
      <ul>
        {Game.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </Container>
  );
};

export default GridGame;
