/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchVal: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const SearchRef = useRef<HTMLInputElement>(null);

  return (
    <form
      id="SearchForm"
      onSubmit={(e) => {
        e.preventDefault();
        if (SearchRef.current) {
          onSearch(SearchRef.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="auto" children={<BsSearch />} />
        <Input
          ref={SearchRef}
          variant={"filled"}
          placeholder="Search For Games ..."
          borderRadius={20}
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
