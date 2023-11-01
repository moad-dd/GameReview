import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo.webp";
import SwitchMode from "./SwitchMode";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <HStack padding="10px">
      <Image
        marginEnd={5}
        src={logo}
        boxSize="60px"
        borderRadius="10px"
      ></Image>
      <SearchBar />
      <SwitchMode></SwitchMode>
    </HStack>
  );
};

export default Navbar;
