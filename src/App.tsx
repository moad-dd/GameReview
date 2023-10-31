/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import GridGame from "./Components/GridGame";
import GenresList from "./Components/GenresList";
import { genre } from "./Hooks/useGenre";
import { useState } from "react";
import PlatformList from "./Components/PlatformList";
import { platform } from "./Hooks/usePlatforms";

function App() {
  const [SelectedGenre, setSelectedGenre] = useState<genre | null>(null);
  const [SelectedPlatform, setSelectedPlatform] = useState<platform | null>(
    null
  );

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
              }}
            />
          </GridItem>
        </Show>
        <GridItem padding={7} area={"main"}>
          <PlatformList
            selectedPlatform={SelectedPlatform}
            onSelectPlatform={(Platform) => setSelectedPlatform(Platform)}
          />
          <GridGame
            SelectedGenre={SelectedGenre}
            SelectedPlatform={SelectedPlatform}
          />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
