/* eslint-disable @typescript-eslint/no-unused-vars */
import { ListItem, SkeletonText, Skeleton, Box } from "@chakra-ui/react";

const GenresListSkeleton = () => {
  return (
    <ListItem>
      <Skeleton />
      <Box marginY={3}>
        <SkeletonText mt="3" noOfLines={2} spacing="2" skeletonHeight="2" />
      </Box>
    </ListItem>
  );
};

export default GenresListSkeleton;
