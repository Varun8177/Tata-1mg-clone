import { Flex, Show, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const PaymentNavbar = () => {
  return (
    <Flex
      ml={{
        base: "5px",
        sm: "5px",
        md: "5px",
        lg: "20px",
        xl: "20px",
        "2xl": "20px",
      }}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Flex
        w={{
          base: "70%",
          sm: "70%",
          md: "70%",
          lg: "70%",
          xl: "50%",
          "2xl": "50%",
        }}
        alignItems={"center"}
      >
        <Image
          src={"/healthPrimeLogo.png"}
          height={"50"}
          alt={"logo"}
          width={"120"}
        />
        <Show above="md">
          <Flex
            w={{
              base: "50%",
              sm: "50%",
              md: "70%",
              lg: "80%",
              xl: "50%",
              "2xl": "50%",
            }}
            justifyContent={"space-between"}
          >
            <Flex>
              <Text
                bgColor={"500"}
                w={"25px"}
                color="white"
                textAlign={"center"}
                borderRadius={"50%"}
              >
                1
              </Text>
              <Text>My Cart</Text>
            </Flex>
            <Flex>
              <Text
                bgColor={"500"}
                w={"25px"}
                color="white"
                textAlign={"center"}
                borderRadius={"50%"}
              >
                2
              </Text>
              <Text>Order Summary</Text>
            </Flex>
            <Flex>
              <Text
                bgColor={"500"}
                w={"25px"}
                color="white"
                textAlign={"center"}
                borderRadius={"50%"}
              >
                3
              </Text>
              <Text>My Cart</Text>
            </Flex>
          </Flex>
        </Show>
      </Flex>
      <Text mr={"20px"}>Need help?</Text>
    </Flex>
  );
};

export default PaymentNavbar;
