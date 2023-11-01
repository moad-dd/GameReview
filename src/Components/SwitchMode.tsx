/* eslint-disable @typescript-eslint/no-unused-vars */
import { HStack, Text, useColorMode } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/switch";

const SwitchMode = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack marginInline={5}>
      <Switch isChecked={colorMode == "dark"} onChange={toggleColorMode} />
      <Text whiteSpace={"nowrap"}>Dark Mode</Text>
    </HStack>
  );
};

export default SwitchMode;
