/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import useGenre, { genre } from "../Hooks/useGenre";
import useData from "../Hooks/useData";
import ImgUrl from "./ImgUrl";
import GenresListSkeleton from "./GenresListSkeleton";
import "../App.css";
interface Props {
  onSelectGenre: (genre: genre) => void;
  SelectedGenre: genre | null;
}

const GenresList = ({ SelectedGenre, onSelectGenre }: Props) => {
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
      <Heading paddingBlock={5}>Genres</Heading>
      {data.map((Genre) => (
        <ListItem key={Genre.id}>
          <HStack marginBlock={2} columnGap={4}>
            <Image
              boxSize="40px"
              src={ImgUrl(Genre.image_background)}
              borderRadius={8}
            />
            <Button
              noOfLines={1}
              variant="link"
              onClick={() => {
                onSelectGenre(Genre);
              }}
              fontWeight={Genre.id === SelectedGenre?.id ? "bold" : "normal"}
              fontSize="lg"
              className="GenreName"
            >
              {Genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
