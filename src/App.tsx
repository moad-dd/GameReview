/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import GridGame from "./Components/GridGame";
import GenresList from "./Components/GenresList";
import { genre } from "./Hooks/useGenre";
import { useState } from "react";
import PlatformList from "./Components/PlatformList";
import { platform } from "./Hooks/usePlatforms";
import SortSelector from "./Components/SortSelector";

export interface GameQuery {
  Genre: genre | null;
  Platform: platform | null;
}

function App() {
  const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
              SelectedGenre={GameQuery.Genre}
              onSelectGenre={(Genre) => setGameQuery({ ...GameQuery, Genre })}
            />
          </GridItem>
        </Show>
        <GridItem padding={7} area={"main"}>
          <HStack spacing={5} paddingStart={3} marginBottom={5}>
            <PlatformList
              selectedPlatform={GameQuery.Platform}
              onSelectPlatform={(Platform) =>
                setGameQuery({ ...GameQuery, Platform })
              }
            />
            <SortSelector />
          </HStack>
          <GridGame gameQuery={GameQuery} />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
