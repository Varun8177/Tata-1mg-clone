import Boxes from "@/components/adminPanel/Boxes";
import Sidebar from "@/components/adminPanel/Sidebar";
import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import Products from "../products";
import {
  Button,
  useColorModeValue,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const AdminProducts = ({ data }) => {
  console.log(data);
  return (
    <Box bgColor={"#d8dff7"} h={"90vh"}>
      <Flex bgColor={"#d8dff7"} border={"1px solid black"} w={"99%"} m={"auto"}>
        <Box
          bgColor={"white"}
          h={"80vh"}
          borderRadius={"10px"}
          mt="30px"
          mr={"30px"}
        >
          <Sidebar />
        </Box>
        <Box
          border={"1px solid red"}
          bgColor={"white"}
          pt={"20px"}
          w={"100%"}
          h={"80vh"}
          m={"auto"}
          mt="30px"
        >
          <Flex justifyContent={"space-around"} borderBottomWidth={1} pb={"5"}>
            <Input placeholder="Search by name " variant={"filled"} w={"50%"} />
            <Menu>
              <MenuButton
                _hover={{ bgColor: "500" }}
                bgColor={"500"}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Filter
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                _hover={{ bgColor: "500" }}
                bgColor={"500"}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Sort
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default AdminProducts;

export async function getServerSideProps() {
  const data = await axios
    .get(`https://dead-earrings-tick.cyclic.app/products`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.log(error));
  return { props: { data } };
}
