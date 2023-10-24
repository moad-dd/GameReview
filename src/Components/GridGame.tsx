/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container, SimpleGrid, Text, list } from "@chakra-ui/react";
import useGame from "../Hooks/useGame";
import CardGame from "./CardGame";

const GridGame = () => {
  const { Games, Error } = useGame();
  return (
    <>
      {Error && <Text>{Error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={10}
      >
        {Games.map((game) => (
          <CardGame game={game} key={game.id}></CardGame>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GridGame;
