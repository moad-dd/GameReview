/* eslint-disable @typescript-eslint/no-unused-vars */
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import useGenre, { genre } from "../Hooks/useGenre";
import useData from "../Hooks/useData";
import ImgUrl from "./ImgUrl";

const GenresList = () => {
  const { data } = useGenre();
  return (
    <List>
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
