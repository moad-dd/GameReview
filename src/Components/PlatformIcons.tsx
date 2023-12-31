/* eslint-disable @typescript-eslint/no-unused-vars */
import { game } from "../Hooks/useGame";
import { platform } from "../Hooks/usePlatforms";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons/lib/esm/iconBase";
interface Props {
  platforms: platform[];
}

const PlatformIcons = ({ platforms }: Props) => {
  const IconsMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    apple: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  return (
    <HStack marginBlock={"4px"}>
      {platforms.map((platform) => (
        <Icon
          marginInline={"1.3px"}
          fontSize={"lg"}
          color={"gray.400"}
          as={IconsMap[platform.slug]}
          key={platform.id}
        />
      ))}
    </HStack>
  );
};

export default PlatformIcons;
