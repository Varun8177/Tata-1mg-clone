import Boxes from "@/components/adminPanel/Boxes";
import Sidebar from "@/components/adminPanel/Sidebar";
import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Admin = () => {
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
          <Text>Welcome Back, </Text>
          <Heading as={"b"}>Varun Ergurala</Heading>

          <Grid
            w={"90%"}
            mt={"30px"}
            color={"white"}
            templateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(2,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
              xl: "repeat(3,1fr)",
              "2xl": "repeat(3,1fr)",
            }}
            gap={"6"}
          >
            <Boxes color={"blue"} />
            <Boxes color={"teal"} />
            <Boxes color={"500"} />
          </Grid>
          <Grid
            w={"90%"}
            mt={"30px"}
            color={"white"}
            templateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(2,1fr)",
              xl: "repeat(2,1fr)",
              "2xl": "repeat(2,1fr)",
            }}
            gap={"6"}
          >
            <Box
              bgColor={"white"}
              h={{
                base: "80px",
                sm: "150px",
                md: "220px",
                lg: "250px",
                xl: "280px",
                "2xl": "300px",
              }}
              borderRadius={"10px"}
            ></Box>
            <Box
              mt={{
                base: "10px",
                sm: "10px",
                md: "0px",
                lg: "0",
                xl: "0",
                "2xl": "0",
              }}
              bgColor={"white"}
              h={{
                base: "80px",
                sm: "150px",
                md: "220px",
                lg: "250px",
                xl: "280px",
                "2xl": "300px",
              }}
              borderRadius={"10px"}
            ></Box>
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Admin;
