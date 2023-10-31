/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Card,
  CardBody,
  CardFooter,
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
import ImgUrl from "./ImgUrl";

interface Props {
  game: game;
}

const CardGame = ({ game }: Props) => {
  return (
    <Card>
      <Image src={ImgUrl(game.background_image)} />
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
