import { CheckIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiThunderBlade } from "react-icons/gi";
import { ImLocation } from "react-icons/im";

const NavMiddleSection = () => {

  const [onChangeValue, setOnChangeValue] = useState('');
  const [search, setSearch] = useState([]);

  const searchMovies = async (query) => {
    const data = await fetch(`https://dead-earrings-tick.cyclic.app/products`);
    const res = await data.json();
    setSearch(res)
  }
  useEffect(() => {
    if (onChangeValue === '') { return }
    const id = setTimeout(() => {
      searchMovies(onChangeValue)
    }, 1000)
    return () => clearTimeout(id)
  }, [onChangeValue]);
  console.log(search)

  return (
    <Flex justifyContent={"space-around"} alignItems={"center"}>
      <Flex
        w={"50%"}
        // border={"1px solid blue"}
        alignItems={"center"}
        pt={"5px"}
        pb={"5px"}
      >
        {/* <InputLeftElement pointerEvents="none">
          <ImLocation color="gray.300" size={"20"} />
        </InputLeftElement> */}
        <Input variant="filled" placeholder="City" size="sm" w={"200px"} />

        <Input
          ml={"20px"}
          variant="filled"
          placeholder="Search for medicines and health products"
          size="sm"
          w={"100%"}
          onChange={(e) => setOnChangeValue(e.target.value)}
        />
        {/* <InputRightElement>
          <Search2Icon />
        </InputRightElement> */}
      </Flex>
      <Flex
        fontSize={{
          base: "8px",
          sm: "10px",
          md: "12px",
          lg: "13px",
          xl: "13px",
          "2xl": "13px",
        }}
        alignItems={"center"}
        ml={"10px"}
      >
        <AiFillThunderbolt />
        <Text>QUICK BUY! Get 25% off on medicines*</Text>
        <Button
          ml={"10px"}
          bgColor={"500"}
          color={"white"}
          _hover={{ bgColor: "500" }}
          fontSize={{
            base: "8px",
            sm: "10px",
            md: "12px",
            lg: "13px",
            xl: "13px",
            "2xl": "13px",
          }}
        >
          Quick Order
        </Button>
      </Flex>
    </Flex>
  );
};

export default NavMiddleSection;
