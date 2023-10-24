/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { game } from "../Hooks/useGame";
import PlatformIcons from "./PlatformIcons";

interface Props {
  game: game;
}

const CardGame = ({ game }: Props) => {
  return (
    <Card borderRadius={7} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <CardHeader>
          <PlatformIcons
            platforms={game.parent_platforms.map((P) => P.platform)}
          />
        </CardHeader>
      </CardBody>
    </Card>
  );
};

export default CardGame;
