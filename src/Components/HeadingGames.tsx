/* eslint-disable @typescript-eslint/no-unused-vars */
import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery;
}

const HeadingGames = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.Platform?.name} ${
    gameQuery.Genre?.name || ""
  } Games`;

  return (
    <Heading fontSize={55} paddingBlock={10} as={"h1"}>
      {heading}
    </Heading>
  );
};

export default HeadingGames;
