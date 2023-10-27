/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container, SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../Hooks/useGame";
import CardGame from "./CardGame";
import CardGameSkelton from "./CardGameSkeleton";
import GameCardContainer from "./GameCardContainer";
import useData from "../Hooks/useData";

const GridGame = () => {
  const { data, Error, isLoading } = useGame();
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
  return (
    <>
      {Error && <Text>{Error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={10}
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <CardGameSkelton key={skeleton} />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer>
            <CardGame game={game} key={game.id}></CardGame>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GridGame;
