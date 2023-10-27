/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import GridGame from "./Components/GridGame";
import GenresList from "./Components/GenresList";

function App() {
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
          <GridItem area={"aside"} paddingX="6px">
            <GenresList />
          </GridItem>
        </Show>
        <GridItem area={"main"} maxWidth={"-moz-fit-content"}>
          <GridGame />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
