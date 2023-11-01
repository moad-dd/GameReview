import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <>
      <Menu id="menu1">
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Sort By :
        </MenuButton>
        <MenuList zIndex="dropdown" maxHeight={"30vh"} overflowY={"scroll"}>
          <MenuItem>Relevance</MenuItem>
          <MenuItem>Date Add</MenuItem>
          <MenuItem>Name</MenuItem>
          <MenuItem>Release Date</MenuItem>
          <MenuItem>Popularity</MenuItem>
          <MenuItem>Average Rating </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
