import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="auto" children={<BsSearch />} />
      <Input
        variant={"filled"}
        placeholder="Search For Games ..."
        borderRadius={20}
      />
    </InputGroup>
  );
};

export default SearchBar;
