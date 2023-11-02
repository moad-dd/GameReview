/* eslint-disable @typescript-eslint/no-unused-vars */
import { Image, ImageProps } from "@chakra-ui/react";
import BullsEye from "../assets/Bulls_eye.png";
import Meh from "../assets/MehEmoji.png";
import ThumbsUp from "../assets/thumbs-up.png";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const Emojis: { [Key: number]: ImageProps } = {
    3: { src: Meh, alt: "Meh", boxSize: "25px" },
    4: { src: ThumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: BullsEye, alt: "exceptional", boxSize: "35px" },
  };

  return <Image {...Emojis[rating]} marginTop={2} />;
};

export default Emoji;
