/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { game } from "../Hooks/useGame";
import PlatformIcons from "./PlatformIcons";
import ScoreCritic from "./ScoreCritic";

interface Props {
  game: game;
}

const CardGame = ({ game }: Props) => {
  return (
    <Card borderRadius={7} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <HStack paddingBottom={2} justifyContent={"space-between"}>
          <PlatformIcons
            platforms={game.parent_platforms.map((P) => P.platform)}
          />
          <ScoreCritic score={game.metacritic} />
        </HStack>

        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default CardGame;
