import React from "react";
import Image from "next/image";
import { Box, Center, Heading, Text, Flex, Stack, Tag } from "@chakra-ui/react";
const FullBodyHealthCheckups = () => {
  const checkups = [
    {
      id: 1,
      name: "Comprehensive Gold Full",
      img: "https://onemg.gumlet.io/safe_bjisiz.svg",
      logo: "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
      price: "2099",
      offered: "4198",
      discount: "50% off",
      rating: "4.9",
      test: "Includes  78 Test",
    },
    {
      id: 2,
      name: "Good Health Smart Package",
      img: "https://onemg.gumlet.io/safe_bjisiz.svg",
      logo: "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
      price: "399",
      offered: "800",
      discount: "50% off",
      rating: "4.9",
      test: "Includes  3 Test",
    },
    {
      id: 3,
      name: "Good Health Silver Package",
      img: "https://onemg.gumlet.io/safe_bjisiz.svg",
      logo: "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
      price: "649",
      offered: "1290",
      discount: "50% off",
      rating: "4.9",
      test: "Includes  58 Test",
    },
    {
      id: 4,
      name: "Comprehensive Silver Full",
      img: "https://onemg.gumlet.io/safe_bjisiz.svg",
      logo: "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
      price: "1699",
      offered: "3390",
      discount: "50% off",
      rating: "4.9",
      test: "Includes  71 Test",
    },
  ];
  return (
    <div>
      <Box
        bg="grey.100"
        w="100%"
        h="200px"
        // border="1px solid black"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        mt="10"
        mb="10"
      >
        <Flex w="80%" m="auto" gap="5">
          {checkups.map((item) => {
            return (
              <>
                <Box
                  _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                  p="5"
                  align="left"
                  key={item.id}
                  w="400px"
                  h="180px"
                  border="1px solid grey"
                  borderRadius={5}
                >
                  <Stack>
                    <Flex gap="5px">
                      <Text fontSize="sm" as="b">
                        {item.name}
                      </Text>
                      <Flex bg="#ffe3c2" align="center">
                        <Image
                          src={item.img}
                          alt={item.name}
                          height={10}
                          width={10}
                        />
                        <Text fontSize="10px" bg="#ffe3c2" p="2 5 2 10">
                          SAFE
                        </Text>
                      </Flex>
                    </Flex>
                    <Text fontSize="10px">{item.test}</Text>
                    <Flex>
                      <Image
                        src={item.logo}
                        alt={item.name}
                        height={50}
                        width={70}
                      />
                      <Tag
                        variant="solid"
                        colorScheme="green"
                        size="xl"
                        h="5"
                        p="2"
                      >
                        {item.rating}{" "}
                      </Tag>

                      {/* <Text bg="green" color="white" p="2px">{item.rating} </Text> */}
                      <Text fontSize="10px">ISO</Text>
                    </Flex>
                    <Flex gap="10px">
                      <Text>₹{item.price}</Text>
                      <Text color="grey" fontSize="15px" as="del">
                        ₹{item.offered}
                      </Text>
                      <Box
                        bg="green.100"
                        color="green"
                        border="1px dotted green"
                        fontSize="15px"
                      >
                        {item.discount}
                      </Box>
                    </Flex>
                  </Stack>
                </Box>
              </>
            );
          })}
        </Flex>
      </Box>
    </div>
  );
};

export default FullBodyHealthCheckups;
