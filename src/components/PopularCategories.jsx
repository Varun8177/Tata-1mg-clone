import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
const PopularCategories = () => {
  const pc = [
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/700ef116-c9c9-4567-b607-5ec05ba46da6.webp",
      name: "Top Deals",
      id: 1,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/4bffbf6d-6d75-45f2-8b3c-962e3a7aec56.png",
      name: "Vitamins & Supplements",
      id: 2,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/da88ee85-1f00-46ce-a038-eb60066daba8.png",
      name: "Nutritional Drinks ",
      id: 3,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/13157c75-c076-4dd2-8c8c-75abb32d37ff.png",
      name: "Personal Care",
      id: 4,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/12e794d8-bca4-4895-aae6-a12b0aa17f54.png",
      name: "Skin Care",
      id: 5,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/a2bd4b8d-999a-4154-a2ea-1a9a415250c9.png",
      name: "Sexual Wellness",
      id: 6,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/6bc4ff83-521f-463f-93a1-f482ebf5b870.png",
      name: "Ayurveda",
      id: 7,
    },
  ];

  return (
    <div>
      <Box
        bg="grey.100"
        w="100%"
        h="250px"
        // border="1px solid black"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        mt="10"
        mb="10"
        p="15px"
      >
        <Flex w="80%" m="auto" gap="5">
          {pc.map((item, i) => {
            return (
              <Box
                _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                objectFit="contain"
                align="center"
                key={item.id}
                borderRadius="15px"
                p="15px"
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  height={200}
                  width={200}
                />
                <Text>{item.name}</Text>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </div>
  );
};

export default PopularCategories;
