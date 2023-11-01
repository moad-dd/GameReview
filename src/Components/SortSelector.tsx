/* eslint-disable @typescript-eslint/no-unused-vars */
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
interface Props {
  onSortOrder: (SortOrder: string) => void;
  SortedOrder: string;
}
const SortSelector = ({ onSortOrder, SortedOrder }: Props) => {
  const SortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Add" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  const CurrentSortOrder = SortOrders.find(
    (Order) => Order.value === SortedOrder
  );
  return (
    <>
      <Menu id="menu1">
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Sort By : {CurrentSortOrder?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {SortOrders.map((order) => (
            <MenuItem
              onClick={() => onSortOrder(order.value)}
              key={order.value}
              value={order.value}
            >
              {" "}
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
