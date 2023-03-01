import React from "react";
import {
  Box,
  Stack,
  Text,
  Image,
  Flex,
  Button,
  Heading,
  Badge,
  useToast,
} from "@chakra-ui/react";
import { MdOutlineLocalOffer } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import Head from "next/head";
import ProductCard from "@/components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import SignUpModal from "@/components/authCom/SignUp/SignUpModal";
import MainNavbar from "@/components/navbar/MainNavbar/MainNavbar";
import Footer from "@/components/footer";
import { AddCartItem } from "@/redux/admin/admin.types";

const SingleProductPage = ({ data }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const Dummydata = [
    {
      maxQty: 7,
      src: "https://onemg.gumlet.io/images/f_auto,w_150,h_150,c_fit,q_auto/0fa72f2c-072d-4c6a-bc52-446edab403a4/tata-1mg-salmon-omega-3-fish-oil-capsule.jpeg",
      title: "Tata 1mg Salmon Omega 3 Fish Oil Capsule",
      packsize: "bottle of 60 capsules",
      rating: "4.4",
      CardRatingDetail: "1506 ratings",
      "strike-price": "995",
      "discount-percent": "47% off",
      price: 524,
      id: 1,
    },
    {
      maxQty: 7,
      src: "https://onemg.gumlet.io/images/f_auto,w_150,h_150,c_fit,q_auto/gc3u9gfc331wtsipnljl/tata-1mg-calcium-vitamin-d3-zinc-magnesium-and-alfalfa-tablet-joint-support-bones-health-immunity-energy-support.jpg",
      title:
        "Tata 1mg Calcium + Vitamin D3, Zinc, Magnesium and Alfalfa Tablet, Joint Support, Bones Health, Immunity & Energy Support",
      packsize: "bottle of 60 tablets",
      rating: "4.3",
      CardRatingDetail: "2418 ratings",
      "strike-price": "595",
      "discount-percent": "53% off",
      price: 277,
      id: 2,
    },
    {
      maxQty: 7,
      src: "https://onemg.gumlet.io/images/f_auto,w_150,h_150,c_fit,q_auto/gggpxmbrgyv0uqhzwyy8/tata-1mg-lumbar-sacral-belt-for-lower-back-support-universal.jpg",
      title: "Tata 1mg Lumbar Sacral Belt for Lower Back Support Universal",
      packsize: "box of 1 Unit",
      rating: "4.2",
      CardRatingDetail: "94 ratings",
      "strike-price": "800",
      "discount-percent": "43% off",
      price: 451,
      id: 3,
    },
    {
      maxQty: 7,
      src: "https://onemg.gumlet.io/images/f_auto,w_150,h_150,c_fit,q_auto/gmkrpf1imjj9djwvq4gq/tata-1mg-multivitamin-supreme-zinc-calcium-and-vitamin-d-capsule-for-immunity-energy-overall-health.jpg",
      title:
        "Tata 1mg Multivitamin Supreme, Zinc, Calcium and Vitamin D Capsule for Immunity, Energy, Overall Health",
      packsize: "bottle of 60 capsules",
      rating: "4.2",
      CardRatingDetail: "1243 ratings",
      "strike-price": "995",
      "discount-percent": "57% off",
      price: 422,
      id: 4,
    },
    {
      maxQty: 7,
      src: "https://onemg.gumlet.io/images/f_auto,w_150,h_150,c_fit,q_auto/59d4bf61-6252-419d-80f7-340459744690/i-know-ovulation-strip-kit.jpeg",
      title: "i-Know Ovulation Strip Kit",
      packsize: "packet of 5 Test Kits",
      rating: "3.7",
      CardRatingDetail: "339 ratings",
      "strike-price": "549",
      "discount-percent": "14% off",
      price: 472,
      id: 5,
    },
  ];
  const { isAuth, userName } = useSelector((state) => state.authReducer);
  return (
    <>
      <Head>
        <title>Health Prime</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <MainNavbar />
        <Stack
          maxW="90%"
          direction={{ lg: "row", md: "column", base: "column" }}
          m={{ lg: "40px auto", md: "30px auto", base: "20px auto" }}
        >
          <Flex
            w={{ lg: "65%", md: "100%", base: "100%" }}
            m="auto"
            direction={{ lg: "row", md: "row", base: "column" }}
          >
            <Box w={{ lg: "50%", md: "100%", base: "100%" }}>
              <Image
                m="auto"
                src={data.src}
                height={{ lg: "300px", md: "200px", base: "150px" }}
                alt=""
              />
            </Box>
            <Box w={{ lg: "50%", md: "100%", base: "100%" }} p={""}>
              <Text
                fontSize={{ lg: "24px", md: "18px", base: "16px" }}
                mb={"10px"}
                fontWeight={700}
                lineHeight="35px"
              >
                {data.title}
              </Text>
              <Text
                fontSize={{ lg: "13px", md: "12px", base: "10px" }}
                mb={"10px"}
                color="#ff6f61"
                fontWeight={600}
              >
                Tata 1mg Healthcare Solutions Private Limited
              </Text>
              <Flex gap={"20px"}>
                <Button
                  bg="#1aab2a"
                  size={"xs"}
                  color={"#fff"}
                  fontSize={{ lg: "13px", md: "12px", base: "10px" }}
                  mb={"10px"}
                  fontWeight={600}
                >
                  {data.rating} <AiFillStar />
                </Button>
                <Text
                  fontSize={{ lg: "13px", md: "12px", base: "10px" }}
                  mb={"10px"}
                  color="#ff6f61"
                  fontWeight={600}
                >
                  {data.CardRatingDetail}
                </Text>
              </Flex>
              <Text color="grey" fontSize={"18px"} mb={"10px"} fontWeight={600}>
                {data.packsize}
              </Text>
              <Text
                fontSize={{ lg: "14px", md: "12px", base: "10px" }}
                lineHeight="20px"
                fontWeight={"400"}
                textAlign={"justify"}
                pb="15px"
              >
                Product highlights <br />• Lorem ipsum dolor sit amet
                consectetur adipisicing elit. <br />• Exercitationem at nam
                tempora voluptatem error hic vitae. <br />
                • excepturi iure nulla ducimus in. <br />• Atque minima
                accusantium quibusdam.
              </Text>
            </Box>
          </Flex>
          <Stack>
            <Stack
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              borderRadius={"10px"}
              h="150px"
            >
              <Box minW={"25%"} p={"10px 20px"} borderRadius={"12px"}>
                <Heading
                  fontSize={{ lg: "25px", md: "20px", base: "18px" }}
                  mb={"10px"}
                  fontWeight={600}
                >
                  Price
                </Heading>
                <Box>
                  <Flex gap={"10px"} align="center">
                    <Text
                      fontSize={{ lg: "25px", md: "20px", base: "18px" }}
                      mb={"10px"}
                      fontWeight={600}
                    >
                      ₹{data.price}
                    </Text>
                    <Text
                      color="grey"
                      fontSize={"15px"}
                      mb={"10px"}
                      textDecor="line-through"
                      fontWeight={600}
                    >
                      ₹{data["strike-price"]}
                    </Text>
                    <Text
                      fontSize={"15px"}
                      mb={"10px"}
                      color="#1aab2a"
                      bg="#edf9ee"
                      fontWeight={600}
                      p={"4px"}
                    >
                      {data["discount-percent"]}
                    </Text>
                  </Flex>
                </Box>
                <Button
                  w={"100%"}
                  size={"md"}
                  borderRadius="5px"
                  bg={"#ff6f61"}
                  _hover={{
                    bg: "#fd7c70",
                  }}
                  color="#fff"
                  display={isAuth ? "block" : "none"}
                  onClick={() => {
                    isAuth && dispatch({ type: AddCartItem, payload: data });
                    // console.log(cartData);
                    if (!isAuth) {
                      toast({
                        title: "Product cannot be added.",
                        description: "Please login first.",
                        status: "error",
                        duration: 3000,
                        isClosable: true,
                        position: "top",
                        bg: "#ff6f61",
                      });
                    } else {
                      toast({
                        title: "Product added to cart.",
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                        position: "top",
                        bg: "#ff6f61",
                      });
                    }
                  }}
                >
                  Add To Cart
                </Button>
                <Button
                  w={"100%"}
                  size={"md"}
                  borderRadius="5px"
                  bg={"#ff6f61"}
                  _hover={{
                    bg: "#fd7c70",
                  }}
                  color="#fff"
                  display={isAuth ? "none" : "block"}
                >
                  <SignUpModal text={"Sign-Up or Log in"} />
                </Button>
              </Box>
            </Stack>
            <Stack boxShadow={"lg"} borderRadius={"10px"} p={5} w={"300px"}>
              <Text>Additional Offers</Text>
              <Flex>
                <MdOutlineLocalOffer size={50} style={{ color: "green" }} />
                <Text fontSize={"10px"}>
                  Paytm Wallet: Pay with Paytm Wallet on Tata 1mg for ₹799 or
                  more and get up to ₹400 cashback. Offer ends 28th February
                  2023
                </Text>
              </Flex>
            </Stack>
          </Stack>
        </Stack>
        <Stack p={10}>
          <Text as={"b"} ml={"20px"}>
            Similar Products
          </Text>
          <Flex flexWrap={"wrap"}>
            {Dummydata?.map((item, i) => {
              // return <Link key={i + 1} href={`products/${item.id}`}>
              return <ProductCard key={i + 1} {...item} />;
              // </Link>
            })}
          </Flex>
        </Stack>
        <Footer />
      </>
    </>
  );
};

export default SingleProductPage;

export async function getStaticPaths() {
  const res = await fetch(`https://dead-earrings-tick.cyclic.app/products`);
  let data = await res.json();
  return {
    paths: data.map((e) => ({ params: { id: e.id.toString() } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const {
    params: { id },
  } = context;
  let res = await fetch(`https://dead-earrings-tick.cyclic.app/products/${id}`);
  let data = await res.json();
  return { props: { data } };
}
