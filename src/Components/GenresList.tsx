/* eslint-disable @typescript-eslint/no-unused-vars */
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import useGenre, { genre } from "../Hooks/useGenre";
import useData from "../Hooks/useData";
import ImgUrl from "./ImgUrl";
import GenresListSkeleton from "./GenresListSkeleton";

const GenresList = () => {
  const { data, isLoading, Error } = useGenre();
  const listSkeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
  if (Error) {
    return null;
  }
  return (
    <List paddingY={10}>
      {isLoading &&
        listSkeletons.map((SkeletonItem) => (
          <GenresListSkeleton key={SkeletonItem}></GenresListSkeleton>
        ))}
      {data.map((Genre) => (
        <ListItem key={Genre.id}>
          <HStack marginBlock={2} columnGap={4}>
            <Image
              boxSize="38px"
              src={ImgUrl(Genre.image_background)}
              borderRadius={8}
            />
            <Text fontSize="lg">{Genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
