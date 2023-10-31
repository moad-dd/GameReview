/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import GridGame from "./Components/GridGame";
import GenresList from "./Components/GenresList";
import { genre } from "./Hooks/useGenre";
import { useState } from "react";

function App() {
  const [SelectedGenre, setSelectedGenre] = useState<genre | null>(null);

  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav""main"`,
          lg: `"nav nav""aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX="15px">
            <GenresList
              SelectedGenre={SelectedGenre}
              onSelectGenre={(genre) => {
                setSelectedGenre(genre);
                console.log(SelectedGenre);
              }}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <GridGame SelectedGenre={SelectedGenre} />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
