import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Grid,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import Boxes from "@/components/adminPanel/Boxes";
import Sidebar from "@/components/adminPanel/Sidebar";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { ChevronDownIcon } from "@chakra-ui/icons";

const AdminsSection = () => {
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
          w={"100%"}
          h={"80vh"}
          m={"auto"}
          mt="30px"
          bgColor={"white"}
          pt={"20px"}
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
          <Grid
            templateColumns={"repeat(5,1fr)"}
            gap={"3"}
            m={"auto"}
            w={"fit-content"}
            alignItems={"center"}
            h={"400px"}
          >
            {Array(5)
              .fill(0)
              .map((item, i) => {
                return (
                  <Box
                    pt={"10"}
                    borderRadius={"10px"}
                    w={"200px"}
                    h={"280px"}
                    bgColor={"gray.200"}
                    key={i}
                  >
                    <Center>
                      <Avatar size={"xl"} />
                    </Center>
                    <Center>
                      <Text as={"b"}>Varun Ergurala</Text>
                    </Center>
                    <Center>
                      <Grid templateColumns={"repeat(2,1fr)"}>
                        <Text>Position:</Text>
                        <Text>Admin</Text>
                        <Text>Status:</Text>
                        <Text>Online</Text>
                        <Text>Contact:</Text>
                        <Text>7984684894</Text>
                      </Grid>
                    </Center>
                  </Box>
                );
              })}
          </Grid>
          <Flex w={"20%"} m={"auto"} justifyContent={"space-evenly"}>
            <Button>Next</Button>
            <Button>Previous</Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default AdminsSection;
