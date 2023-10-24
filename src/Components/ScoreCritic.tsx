/* eslint-disable @typescript-eslint/no-unused-vars */
import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const ScoreCritic = ({ score }: Props) => {
  const Score_color = score > 75 ? "green" : score > 50 ? "yellow" : "";
  return (
    <Badge
      colorScheme={Score_color}
      fontSize={"16px"}
      paddingX={2}
      borderRadius={"4px"}
    >
      {score}
    </Badge>
  );
};

export default ScoreCritic;
