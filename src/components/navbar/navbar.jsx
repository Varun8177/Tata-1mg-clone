import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import ColorModeToggle from "../darkMode";
import { AiFillProfile, AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <Box borderBottomWidth={"1px"}>
      <Flex ml={"20px"}>
        <Image src={"/favicon.ico"} height={10} alt={"logo"} width={50} />
        <Flex
          border={"1px solid red"}
          ml={"20px"}
          w={"50%"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <Text as={"b"}>MEDICINES</Text>
          <Text as={"b"}>LAB TESTS</Text>
          <Text as={"b"}>CONSULT DOCTORS</Text>
          <Text as={"b"}>COVID 19</Text>
          <Text as={"b"}>AYURVEDA</Text>
          <Text as={"b"}>CARE PLAN</Text>
        </Flex>
        <Flex>
          <AiFillProfile />
          <Text>Offers</Text>
          <AiOutlineShoppingCart />
        </Flex>
      </Flex>
    </Box>
  );
};

{
  /* <ColorModeToggle /> */
}
export default Navbar;
