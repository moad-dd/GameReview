import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { game } from "../Hooks/useGame";

interface Props {
  game: game;
}

const CardGame = ({ game }: Props) => {
  return (
    <Card borderRadius={7} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default CardGame;
