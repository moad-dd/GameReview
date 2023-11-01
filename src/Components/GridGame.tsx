/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Alert,
  AlertIcon,
  Container,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import useGame, { game } from "../Hooks/useGame";
import CardGame from "./CardGame";
import CardGameSkelton from "./CardGameSkeleton";
import GameCardContainer from "./GameCardContainer";
import { genre } from "../Hooks/useGenre";
import { platform } from "../Hooks/usePlatforms";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GridGame = ({ gameQuery }: Props) => {
  const { data, Error, isLoading } = useGame(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <>
      {Error && <Text>{Error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
        padding={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <CardGameSkelton key={skeleton} />
            </GameCardContainer>
          ))}
        {data.length == 0 && (
          <Alert status="warning">
            <AlertIcon />
            Seems That There Is No Game For this{" "}
            {gameQuery.Genre ? "Genre" : "Platform "}
          </Alert>
        )}
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
