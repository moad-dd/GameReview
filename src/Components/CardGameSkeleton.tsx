import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const CardGameSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px" width="300px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default CardGameSkeleton;
