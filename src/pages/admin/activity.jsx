import Boxes from "@/components/adminPanel/Boxes";
import Sidebar from "@/components/adminPanel/Sidebar";
import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const Activity = () => {
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
        >
          <Heading>Activity</Heading>
        </Box>
      </Flex>
    </Box>
  );
};

export default Activity;
