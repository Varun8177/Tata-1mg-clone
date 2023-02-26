import Boxes from "@/components/adminPanel/Boxes";
import Sidebar from "@/components/adminPanel/Sidebar";
import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useDispatch, useSelector } from "react-redux";
import { GetRequest } from "@/redux/admin/admin.action";

const Admin = () => {
  const prod = useSelector((store) => store.AdminReducer.products);
  const dispatch = useDispatch();
  const InitialData = () => {
    dispatch(GetRequest());
  };
  useEffect(() => {
    InitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(prod);
  const data = [
    { id: 1, day: "monday", userGain: 88, userLoast: 823 },
    { id: 2, day: "tuesday", userGain: 12, userLoast: 823 },
    { id: 3, day: "wednesday", userGain: 24, userLoast: 823 },
    { id: 4, day: "thursday", userGain: 56, userLoast: 823 },
    { id: 5, day: "friday", userGain: 32, userLoast: 823 },
    { id: 6, day: "saturday", userGain: 54, userLoast: 823 },
    { id: 7, day: "sunday", userGain: 76, userLoast: 823 },
  ];
  const userData = {
    labels: data.map((data) => data.day),
    datasets: [
      {
        label: "Users Gained",
        data: data.map((data) => data.userGain),
        backgroundColor: ["#f24c00", "#e7e7e7", "#b9a44c"],
      },
    ],
  };
  return (
    <Box
      bgColor={"#d8dff7"}
      h={{
        base: "130vh",
        lg: "90vh",
      }}
    >
      <Flex bgColor={"#d8dff7"} w={"99%"} m={"auto"}>
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
          // border={"1px solid red"}
          w={"100%"}
          h={{
            base: "120vh",
            lg: "80vh",
          }}
          m={"auto"}
          mt="30px"
          bgColor={"white"}
          p={"6"}
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
            <Boxes
              color={"#577590"}
              value={String(prod.length).split("").join(" ")}
              text={"Total Products"}
            />
            <Boxes color={"#43aa8b"} value={"1 0"} text={"Users online"} />
            <Boxes color={"#90be6d"} value={"5"} text={"orders"} />
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
              boxShadow={"lg"}
              bgColor={"white"}
              h={{
                base: "80px",
                sm: "150px",
                md: "220px",
                lg: "180px",
                xl: "200px",
                "2xl": "300px",
              }}
              borderRadius={"10px"}
            >
              <Bar data={userData} />
            </Box>
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
                lg: "180px",
                xl: "200px",
                "2xl": "300px",
              }}
              borderRadius={"10px"}
            >
              {" "}
              <Pie data={userData} />
            </Box>
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Admin;
