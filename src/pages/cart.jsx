import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { DeleteIcon } from "@chakra-ui/icons";
import { auth } from "config/firebase";
import { userStatusUpdate } from "@/redux/auth/action";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { DELETE_PRODUCT_REQUEST } from "@/redux/products/products.actionTypes";
import EmptyCart from "@/components/EmptyCart";
import { DeleteCartItem } from "@/redux/admin/admin.types";
import AddReduceCartButton from "@/components/AddReduceCartButton";
import CartNavbar from "@/components/navbar/cartNavbar/CartNavbar";

// CardRatingDetail // "2418 ratings"
// discount-percent // "53% off"
// id // 2
// maxQty // 7
// packsize // "bottle of 60 tablets"
// price // 277
// rating // "4.3"
// src // "https://onemg.gumlet.io/images/f_auto,w_150,h_150,c_fit,q_auto/gc3u9gfc331wtsipnljl/tata-1mg-calcium-vitamin-d3-zinc-magnesium-and-alfalfa-tablet-joint-support-bones-health-immunity-energy-support.jpg"
// strike-price // "595"
// title // "Tata 1mg Calcium + Vitamin D3, Zinc, Magnesium and Alfalfa Tab

const Cart = () => {
  const { isAuth, userName } = useSelector((state) => state.authReducer);
  let cartData = useSelector((state) => state.AdminReducer.cart);
  let [totalPrice, setTotalPrice] = useState(0);
  const router = useRouter();
  const dispatch = useDispatch();
  // let totalPrice = 0;
  let priceDiscount = 0;

  const handleRemoveBtn = (value) => {
    dispatch({ type: DeleteCartItem, payload: value });
    let x = value.price;
    handleTotalPrice(-x);
  };

  const handleTotalPrice = (value) => {
    setTotalPrice(totalPrice + value);
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(userStatusUpdate(user.displayName));
      }
    });
    let x = cartData.reduce((acc, item) => (acc += item.price), 0);
    setTotalPrice(x);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <CartNavbar />
      {!isAuth ? (
        <Center>
          <Text as="b" fontSize={25} color="red">
            You are not Logged In
          </Text>
        </Center>
      ) : cartData.length === 0 ? (
        <Box bg="#f6f6f6" h="84vh">
          <Grid align={"center"} gap="30px" p="50px">
            <Image
              // h="100%"
              w={{ lg: "12%", md: "20%", sm: "20%" }}
              src={
                "https://www.1mg.com/images/online_consultation/empty-cart-icon.svg"
              }
              alt={""}
              m="auto"
            />
            <Text fontWeight={"700"}>Oops!</Text>
            <Text>Looks like there is no item in your cart yet.</Text>
            <Button
              size={"md"}
              borderRadius="5px"
              bg={"#ff6f61"}
              color="#fff"
              m="auto"
              _hover={{
                bg: "#fd7c70",
              }}
              onClick={() => router.push("/")}
            >
              ADD MEDICINES
            </Button>
          </Grid>
        </Box>
      ) : (
        <Box bg="#f6f6f6" pb="50px">
          <Text fontWeight="700" fontSize={"24px"} textAlign="center" p="20px">
            Items in your cart
          </Text>
          <Flex
            w="90%"
            m="auto"
            gap={{ base: "50px" }}
            direction={{ lg: "row", md: "column", base: "column" }}
            p={{ lg: "10px 80px", md: "10px 40px", base: "column" }}
            // border='1px solid'
          >
            <Box>
              {cartData.map((item, i) => {
                return (
                  <Box
                    // {...totalPrice += item.price}
                    {...(priceDiscount += Number(item["strike-price"]))}
                    key={item.id}
                    w={{ lg: "600px", md: "600px", base: "300px" }}
                    h="auto"
                    m="auto"
                    bg="white"
                    p="20px 40px"
                    display={{ lg: "flex", md: "flex", base: "row" }}
                    justifyContent="space-between"
                    boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                    // border='1px solid'
                  >
                    <Box>
                      <Text
                        fontSize={{ lg: "14px", md: "12px", base: "12px" }}
                        fontWeight="700"
                        color={"#212121"}
                        lineHeight={"25px"}
                      >
                        {item.title}
                      </Text>
                      <Text
                        fontSize={"12px"}
                        fontWeight="700"
                        color={"#9e9e9e"}
                        lineHeight={"40px"}
                      >
                        {item.packsize}
                      </Text>
                      <Text
                        fontSize={"13px"}
                        fontWeight="700"
                        color={"#9e9e9e"}
                        lineHeight={"40px"}
                        cursor="pointer"
                        onClick={() => handleRemoveBtn(item)}
                      >
                        <DeleteIcon fontSize={"15px"} /> Remove
                      </Text>
                    </Box>

                    <Box>
                      <Text
                        fontSize={"14px"}
                        fontWeight="700"
                        color={"#212121"}
                        lineHeight={"25px"}
                        textAlign={{ lg: "right", md: "right" }}
                      >
                        ₹{item.price}
                      </Text>
                      <Text
                        fontSize={"12px"}
                        fontWeight="700"
                        color={"#9e9e9e"}
                        lineHeight={"30px"}
                        textDecor={"line-through"}
                        textAlign={{ lg: "right", md: "right" }}
                      >
                        MRP₹{item["strike-price"]}
                      </Text>
                      {/*  */}
                      <AddReduceCartButton
                        handleTotalPrice={handleTotalPrice}
                        price={item.price}
                      />
                    </Box>
                  </Box>
                );
              })}
            </Box>
            <Box
              m="auto"
              mt="0px"
              bg="white"
              p="20px 40px"
              display={"grid"}
              justifyContent="space-between"
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              color="#757575"
              fontSize="12px"
              fontWeight="500"
              gap="5px"
              // border='1px solid'
            >
              <Box
                display="flex"
                justifyContent="space-between"
                lineHeight="30px"
                gap={{ lg: "220px", md: "200px", base: "60px" }}
              >
                <Text textAlign="left">Item Total(MRP)</Text>{" "}
                <Text textAlign="right">{totalPrice}</Text>
              </Box>
              {/* <Divider /> */}
              <Box
                display="flex"
                justifyContent="space-between"
                lineHeight="30px"
              >
                <Text> Price Discount</Text> <Text textAlign="right">10%</Text>
              </Box>
              <Divider />
              <Box
                display="flex"
                justifyContent="space-between"
                lineHeight="30px"
              >
                <Text>Shipping Fee</Text> <Text>Free</Text>
              </Box>
              <Divider />
              <Box
                display="flex"
                justifyContent="space-between"
                color="#767676"
                fontSize="13px"
                fontWeight="700"
                lineHeight="30px"
              >
                <Text>To be paid</Text>{" "}
                <Text>₹{totalPrice - eval((totalPrice * 1) / 10)}</Text>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                lineHeight="30px"
                bg="#e4f6e7"
              >
                <Text>Total Savings</Text>{" "}
                <Text
                  textAlign="right"
                  color={"#1aab2a"}
                  fontWeight="700"
                  fontSize={"13px"}
                >
                  {eval((totalPrice * 1) / 10)}
                </Text>
              </Box>
              <Button
                bgColor={"500"}
                color={"white"}
                _hover={{ bgColor: "500" }}
                onClick={() => router.push("/payment")}
              >
                Proceed to checkout
              </Button>
            </Box>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default Cart;
