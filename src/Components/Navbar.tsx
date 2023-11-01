import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo.webp";
import SwitchMode from "./SwitchMode";
import SearchBar from "./SearchBar";
interface Props {
  onSearch: (searchVal: string) => void;
}
const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image
        marginEnd={5}
        src={logo}
        boxSize="60px"
        borderRadius="10px"
      ></Image>
      <SearchBar onSearch={onSearch} />
      <SwitchMode></SwitchMode>
    </HStack>
  );
};

export default Navbar;
