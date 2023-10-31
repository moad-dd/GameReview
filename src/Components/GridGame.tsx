/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container, SimpleGrid, Text } from "@chakra-ui/react";
import useGame, { game } from "../Hooks/useGame";
import CardGame from "./CardGame";
import CardGameSkelton from "./CardGameSkeleton";
import GameCardContainer from "./GameCardContainer";
import useData from "../Hooks/useData";
import { genre } from "../Hooks/useGenre";

interface Props {
  SelectedGenre: genre | null;
}

const GridGame = ({ SelectedGenre }: Props) => {
  const { data, Error, isLoading } = useGame(SelectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <>
      {Error && <Text>{Error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={10}
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <CardGameSkelton key={skeleton} />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <CardGame game={game} key={game.id}></CardGame>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GridGame;
