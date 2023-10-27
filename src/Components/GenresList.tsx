/* eslint-disable @typescript-eslint/no-unused-vars */
import { List, ListItem } from "@chakra-ui/react";
import React from "react";
import useGenre, { genre } from "../Hooks/useGenre";
import useData from "../Hooks/useData";

const GenresList = () => {
  const { data } = useGenre();
  return (
    <List>
      {data.map((Genre) => (
        <ListItem key={Genre.id}>{Genre.name}</ListItem>
      ))}
    </List>
  );
};

export default GenresList;
