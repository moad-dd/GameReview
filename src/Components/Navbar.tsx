import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo.webp";
import SwitchMode from "./SwitchMode";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" borderRadius="50px"></Image>
      <SwitchMode></SwitchMode>
    </HStack>
  );
};

export default Navbar;
