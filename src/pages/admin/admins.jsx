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
} from "@chakra-ui/react";
import Boxes from "@/components/adminPanel/Boxes";
import Sidebar from "@/components/adminPanel/Sidebar";
import React from "react";
import { BsGithub } from "react-icons/bs";

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
          border={"1px solid red"}
          w={"100%"}
          h={"80vh"}
          m={"auto"}
          mt="30px"
          bgColor={"white"}
        >
          <Grid templateColumns={"repeat(5,1fr)"} gap={"10"}>
            {Array(5)
              .fill(0)
              .map((item, i) => {
                return (
                  <Box w={"200px"} h={"250px"} bgColor={"gray.200"} key={i}>
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
                    {/* <Flex w={"80%"} m={"auto"} justifyContent={"space-evenly"}>
                      <BsGithub />
                      <BsGithub />
                      <BsGithub />
                      <BsGithub />
                    </Flex> */}
                  </Box>
                );
              })}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default AdminsSection;
