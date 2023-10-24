/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import GridGame from "./Components/GridGame";

function App() {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav""main"`,
          lg: `"nav nav""aside main"`,
        }}
      >
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} borderColor="white">
            Aside
          </GridItem>
        </Show>
        <GridItem
          area={"main"}
          borderColor="black"
          maxWidth={"-moz-fit-content"}
        >
          <GridGame />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
