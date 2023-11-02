/* eslint-disable @typescript-eslint/no-unused-vars */
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import "../App.css";
import usePlatform from "../Hooks/usePlatforms";
import { platform } from "../Hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: platform | null) => void;
  selectedPlatform: platform | null;
}

const PlatformList = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, Error } = usePlatform();

  if (Error) {
    return null;
  }

  return (
    <>
      <Menu id="menu">
        <MenuButton
          fontSize={20}
          fontWeight="semibold"
          as={Button}
          rightIcon={<BsChevronDown />}
        >
          {selectedPlatform?.name ? selectedPlatform.name : "Platform"}
        </MenuButton>
        <MenuList zIndex="dropdown" maxHeight={"30vh"} overflowY={"scroll"}>
          {data.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => {
                onSelectPlatform(platform);
              }}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformList;
