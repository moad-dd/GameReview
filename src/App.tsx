/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav""main"`,
          lg: `"nav nav""aside main"`,
        }}
      >
        <GridItem area={"nav"} bg={"white"}>
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} bg={"red"}>
            Aside
          </GridItem>
        </Show>
        <GridItem area={"main"} bg={"blue"}>
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
