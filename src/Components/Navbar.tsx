import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Logo.webp";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
      <Text color={"black"}> Rawg </Text>
    </HStack>
  );
};

export default Navbar;