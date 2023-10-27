/* eslint-disable @typescript-eslint/no-unused-vars */
import { List, ListItem } from "@chakra-ui/react";
import React from "react";
import useGenre from "../Hooks/useGenre";

const GenresList = () => {
  const { Genres } = useGenre();
  return (
    <List>
      {Genres.map((Genre) => (
        <ListItem key={Genre.id}>{Genre.name}</ListItem>
      ))}
    </List>
  );
};

export default GenresList;
