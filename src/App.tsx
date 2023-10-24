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
          <GridItem area={"aside"} borderColor="black" borderRadius="10px">
            Aside
          </GridItem>
        </Show>
        <GridItem area={"main"} borderColor="black" borderRadius="10px">
          <GridGame />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
