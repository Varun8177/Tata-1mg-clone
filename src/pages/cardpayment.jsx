import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { useRouter } from "next/router";
import CartNavbar from "@/components/navbar/cartNavbar/CartNavbar";
import { RESETCART } from "@/redux/admin/admin.types";
import { useDispatch } from "react-redux";

export default function Cardpayment() {
  const [cards, setCards] = useState("true");
  const dispatch = useDispatch();
  const [cash, setCash] = useState("false");
  const [captcha, setCaptch] = useState("");
  const [cardnum, setcardnum] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [empty, setEmpty] = useState(false);
  const emp = () => {
    if (cardnum == "" || month == "" || year == "" || cvv == "" || name == "") {
      setEmpty(false);
    } else {
      setEmpty(true);
    }
  };

  console.log(empty);
  const router = useRouter();
  const toast = useToast();
  useEffect(() => {
    let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let arr = "qwertyuiopasdfghjklzxcvbnm";
    const otp = Math.random().toString().substr(2, 6);
    let captcha = otp.toString();

    captcha =
      num[captcha[0]] +
      arr[captcha[1]] +
      num[captcha[2]] +
      num[captcha[3]] +
      arr[captcha[4]];
    setCaptch(captcha);
  }, []);
  const Proceedpay = () => {
    const OverlayOne = () => (
      <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />
    );

    const OverlayTwo = () => (
      <ModalOverlay
        backdropFilter="auto"
        backdropInvert="80%"
        backdropBlur="2px"
        bg="#ff6f61"
      />
    );

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [overlay, setOverlay] = React.useState(<OverlayOne />);
    const [check, setCheck] = useState("");

    return (
      <>
        {emp()}
        <Button
          _hover={{ bgColor: "500" }}
          disabled={false}
          onClick={() => {
            if (empty) {
              setOverlay(<OverlayOne />);
              onOpen();
            } else {
              toast({
                title: "Details not filled",
                description: "please fill all details",
                status: "error",
                duration: 3000,
                isClosable: true,
              });
            }
          }}
          bg=""
          isDisabled={
            cardnum == "" ||
            month == "" ||
            year == "" ||
            cvv == "" ||
            name == ""
          }
        >
          Proceed to payment
        </Button>

        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>Enter captcha</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div
                style={{
                  border: "1px solid",
                  height: "40px",
                  width: "150px",
                  padding: "6px",
                  backgroundColor: "grey",
                  fontSize: "15px",
                  fontWeight: "bold",
                  margin: "20px",
                }}
              >
                <Text textAlign={"center"}>Captcha:{captcha}</Text>
              </div>
              <Input
                type={"text"}
                placeholder={"enter captcha"}
                onChange={(e) => setCheck(e.target.value)}
                value={check}
              />
            </ModalBody>
            <ModalFooter>
              <Button
                backgroundColor={"orange"}
                color={"white"}
                onClick={() => {
                  if (check == captcha) {
                    // dispatch({ type: RESETCART });
                    router.push("/final");
                  } else {
                    toast({
                      title: "adress not saved",
                      description: "captcha incorrect",
                      status: "error",
                      duration: 4000,
                      isClosable: true,
                    });
                  }
                }}
              >
                PROCEED
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
  const handleCard = () => {
    setCards(true);
  };
  const handlecash = () => {
    setCards(false);
    setCash(true);
  };
  const cashdel = () => {
    return (
      <div style={{ padding: "40px" }}>
        <Image
          src="https://onemg.gumlet.io/marketing/280ca862-d1ae-4025-999a-b37d0ef5b430.jpg"
          alt=""
        />
        <p style={{ fontSize: "14px", fontWeight: "bold" }}>
          Cash on delivery is available
        </p>
      </div>
    );
  };
  const cardstructure = () => {
    return (
      <>
        <div style={{ gap: "40px", backgroundColor: "white" }}>
          <div style={{ marginTop: "0px" }}>
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>
              Credit & bills
            </p>
            <p style={{ fontSize: "10px" }}>Addcart & payment</p>
          </div>
          <div style={{ marginTop: "30px" }}>
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>CARD NUMBER</p>
            <input
              maxLength={16}
              minLength={16}
              type={"text"}
              placeholder="XXXX XXXX XXXX XXXX"
              style={{ borderBlockEnd: "1px solid grey", marginTop: "20px" }}
              onChange={(e) => {
                setcardnum(e.target.value);
              }}
              value={cardnum}
            />
          </div>
          <div style={{ marginTop: "30px" }}>
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>
              Card expilry dd/mm)
            </p>

            <span class="expiration" style={{ marginTop: "20px" }}>
              <input
                type={"text"}
                name="month"
                placeholder="MM"
                maxlength="2"
                size="2"
                style={{ borderBlockEnd: "1px solid grey" }}
                onChange={(e) => {
                  setMonth(e.target.value);
                }}
                value={month}
              />
              <span>/</span>
              <input
                style={{ marginTop: "20px", borderBlockEnd: "1px solid grey" }}
                type={"text"}
                name="year"
                placeholder="YY"
                maxlength="2"
                size="2"
                onChange={(e) => {
                  setYear(e.target.value);
                }}
                value={year}
              />

              <div style={{ marginTop: "20px" }}>
                <p style={{ fontSize: "10px" }}>security code</p>

                <input
                  type={"text"}
                  name="month"
                  placeholder="CVV"
                  maxLength={3}
                  minLength={3}
                  size="3"
                  style={{ borderBlockEnd: "1px solid grey" }}
                  onChange={(e) => {
                    setCvv(e.target.value);
                  }}
                  value={cvv}
                />
              </div>
            </span>
          </div>
          <input
            type="text"
            placeholder="Name On Card"
            style={{ borderBlockEnd: "1px solid grey", marginTop: "20px" }}
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
          <div style={{ marginTop: "20px" }}>
            <Checkbox colorScheme="red" h={"50px"} w={"50px"}></Checkbox>
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>
              Your card details will be saved securely for future transactions,
              based on the industry standards.
            </p>
          </div>
          <div style={{ margin: "auto", marginTop: "10px" }}>
            <p style={{ fontSize: "10px", fontWeight: "bold" }}>
              We support domestic credit and debit cards of following brands
            </p>
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "70px",
              marginTop: "20px",
              gap: "10px",
            }}
          >
            <Image
              style={{ width: "20px", height: "20px" }}
              src="https://onemg.gumlet.io/marketing/7f77216d-f9fc-4740-8c10-be627b0b6005.jpg"
              alt=""
            />
            <Image
              style={{ width: "20px", height: "20px" }}
              src="https://onemg.gumlet.io/marketing/0d7023e4-b2bb-4322-8ca0-3b917294e722.jpg"
              alt=""
            />
            <Image
              style={{ width: "20px", height: "20px" }}
              src="https://onemg.gumlet.io/marketing/b0f4092b-f799-4bc8-af01-b28426f1b13e.jpg"
              alt=""
            />
            <Image
              style={{ width: "20px", height: "20px" }}
              src="https://onemg.gumlet.io/marketing/ff2df2be-ddaf-4b6f-9be2-ea422f06633d.jpg"
              alt=""
            />
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <CartNavbar />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          margin: "auto",
          border: "0px solid red",
          backgroundColor: "#FAFAFA",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            width: "20%",
            border: "0px solid red",
            height: "400px",
            padding: "10px",
            backgroundColor: "#fff3e3",
          }}
        >
          <div backgroundColor={""}>
            <div
              onClick={handleCard}
              style={{
                display: "flex",
                gap: "30px",
                backgroundColor: "white",
                boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
                marginBottom: "30px",
              }}
            >
              <Image
                src="https://onemg.gumlet.io/marketing/9b1695ca-b1a9-4893-9157-963047689acb.jpg"
                alt=""
              />
              <Text>CARDS</Text>
            </div>
          </div>
          <div
            onClick={handlecash}
            style={{
              display: "flex",
              gap: "30px",
              backgroundColor: "white",
              boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
          >
            <Image
              src="https://onemg.gumlet.io/marketing/280ca862-d1ae-4025-999a-b37d0ef5b430.jpg"
              alt=""
            />
            <Text>Pay on delivery</Text>
          </div>
        </div>
        <div
          style={{
            width: "40%",
            border: "0px solid red",
            height: "auto",
            padding: "20px",
            backgroundColor: "white",
          }}
        >
          {cards ? cardstructure() : cashdel()}
        </div>
        <div style={{ width: "30%", border: "0px solid red", height: "auto" }}>
          <div
            style={{
              height: "auto",
              width: "95%",
              border: "0px solid red",
              marginTop: "50px",
              padding: "20px",
              backgroundColor: "white",
              display: "flex",
            }}
          >
            <Image
              src="https://onemg.gumlet.io/marketing/01e510d5-905f-4aab-be4d-8470cb7389ce.jpg"
              alt=""
            />
            <Text fontSize={"12px"}>
              Pay with Paytm and get up to ₹400 cashback. T&C apply.
            </Text>
          </div>
          <div
            style={{
              height: "auto",
              width: "95%",
              border: "0px solid red",
              marginTop: "20px",
              padding: "20px",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "30px",
              }}
            >
              <Text fontSize={"12px"}>Item Total(MRP)</Text>
              <Text fontSize={"12px"}>2000</Text>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "30px",
              }}
            >
              <Text fontSize={"12px"}>Price Discount</Text>
              <Text fontSize={"12px"}>-₹591</Text>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "30px",
              }}
            >
              <Text fontSize={"12px"}>Care Plan</Text>
              <Text fontSize={"12px"}>₹165</Text>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "30px",
              }}
            >
              <hr />
              <Text fontSize={"12px"}>
                Shipping{" "}
                <span style={{ backgroundColor: "#e4f6e7" }}>
                  FeeFREE for Members
                </span>
              </Text>
              <Text fontSize={"12px"}>0</Text>
              <hr color="red" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "30px",
              }}
            >
              <Text fontSize={"12px"}>To be paid</Text>
              <Text fontSize={"12px"}>₹2643</Text>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "30px",
                backgroundColor: "#e4f6e7",
                height: "40px",
                color: "#465a4c",
                fontWeight: "bold",
                padding: "10px",
              }}
            >
              <Text fontSize={"12px"}>Total Savings</Text>
              <Text fontSize={"12px"}>₹591</Text>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "auto",
                backgroundColor: "#ff6f61",
                marginTop: "30px",
                height: "60px",
                color: "white",
                fontWeight: "bold",
                padding: "10px",
              }}
            >
              <Proceedpay />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
