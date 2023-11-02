/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Container, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import GridGame from "./Components/GridGame";
import GenresList from "./Components/GenresList";
import { genre } from "./Hooks/useGenre";
import { useState } from "react";
import PlatformList from "./Components/PlatformList";
import { platform } from "./Hooks/usePlatforms";
import SortSelector from "./Components/SortSelector";
import HeadingGames from "./Components/HeadingGames";

export interface GameQuery {
  Genre: genre | null;
  Platform: platform | null;
  SortOrder: string;
  SearchVal: string;
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
          <Navbar
            onSearch={(SearchVal) => setGameQuery({ ...GameQuery, SearchVal })}
          />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingY={5} paddingX={15}>
            <GenresList
              SelectedGenre={GameQuery.Genre}
              onSelectGenre={(Genre) => setGameQuery({ ...GameQuery, Genre })}
            />
          </GridItem>
        </Show>
        <GridItem padding={7} area={"main"}>
          <Box marginStart={5}>
            <HeadingGames gameQuery={GameQuery} />
            <HStack spacing={5} marginBottom={5}>
              <SortSelector
                onSortOrder={(SortOrder) =>
                  setGameQuery({ ...GameQuery, SortOrder })
                }
                SortedOrder={GameQuery.SortOrder}
              />
              <PlatformList
                selectedPlatform={GameQuery.Platform}
                onSelectPlatform={(Platform) =>
                  setGameQuery({ ...GameQuery, Platform })
                }
              />
            </HStack>
          </Box>
          <GridGame gameQuery={GameQuery} />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
