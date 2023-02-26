import React from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Text,
  Textarea,
  RadioGroup,
  Stack,
  Radio,
  Flex,
  useToast,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useradress } from "@/redux/adress/adress.action";
import { ADDADRESS } from "@/redux/adress/adress.types";
import PaymentNavbar from "@/components/navbar/paymentNavbar/PaymentNavbar";
import CartNavbar from "@/components/navbar/cartNavbar/CartNavbar";
function ResizeExample() {
  const [resize, setResize] = React.useState("horizontal");
  return (
    <>
      <RadioGroup defaultValue={resize} onChange={setResize} mb={6}>
        <Stack direction="row" spacing={5}>
          <Radio value="horizontal">Home</Radio>
          <Radio value="vertical">Office</Radio>
          <Radio value="none">Other</Radio>
        </Stack>
      </RadioGroup>
    </>
  );
}
const Payment = () => {
  let [value, setValue] = React.useState("");
  let [add, setAdd] = React.useState("");
  let [land, setLand] = React.useState("");
  let [pin, setPin] = React.useState("");
  let [local, setLocal] = React.useState("");
  let [city, setCity] = React.useState("");
  let [state, setState] = React.useState("");
  let [mobile, setMobile] = React.useState("");
  let [name, setName] = React.useState("");
  const toast = useToast();
  const router = useRouter();
  const dispatch = useDispatch();
  const eventHandler = () => {
    if (
      add == "" ||
      land == "" ||
      pin == "" ||
      local == "" ||
      city == "" ||
      state == "" ||
      mobile == "" ||
      name == ""
    ) {
      toast({
        title: "adress not saved",
        description: "Please Fill the all details",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {
      const adress = {
        name: name,
        actualadress: add,
        state: state,
        city: city,
        mobile: mobile,
        pin: pin,
      };
      dispatch({ type: ADDADRESS, payload: adress });
      toast({
        title: "adress saved.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      router.push("/summary");
    }
  };
  return (
    <>
      <CartNavbar />
      <Box padding={"50px"} backgroundColor={"gray.100"}>
        <Box
          backgroundColor={"gray.100"}
          style={{
            border: "0px solid gray",
            marginLeft: "200px",
            color: "333333",
            fontSize: "16px",
            fontFamily: "Clear SansHelvetica Neue",
          }}
        >
          Add New Address
        </Box>
        <Box
          style={{
            borderStyle: "ridge",
            width: "40%",
            height: "750px",
            marginLeft: "200px",
            backgroundColor: "white",
            padding: "20px",
          }}
        >
          <input
            onChange={(e) => setAdd(e.target.value)}
            type={"text"}
            value={add}
            style={{
              textAlign: "start",

              padding: "5px",
              fontFamily:
                "Clear Sans Helvetica Neue Helvetica Arial sans-serif",
              border: "1px solid gray",
              width: "95%",
              margin: "15px",
              height: "80px",
              borderRadius: "5px",
            }}
            placeholder="Flatnumber,BuildingName,Streetname,City"
          />
          <input
            onChange={(e) => setLand(e.target.value)}
            value={land}
            style={{
              textAlign: "start",
              padding: "5px",
              fontFamily:
                "Clear Sans Helvetica Neue Helvetica Arial sans-serif",
              border: "1px solid gray",
              width: "95%",
              margin: "15px",
              height: "40px",
              borderRadius: "5px",
            }}
            placeholder="Landmark (optional)"
          />
          <input
            onChange={(e) => setPin(e.target.value)}
            value={pin}
            type={"number"}
            style={{
              textAlign: "start",
              padding: "5px",
              fontFamily:
                "Clear Sans Helvetica Neue Helvetica Arial sans-serif",
              border: "1px solid gray",
              width: "95%",
              margin: "15px",
              height: "40px",
              borderRadius: "5px",
            }}
            placeholder="Pincode"
          />
          <input
            onChange={(e) => setLocal(e.target.value)}
            value={local}
            type={"text"}
            style={{
              textAlign: "start",
              padding: "5px",
              fontFamily:
                "Clear Sans Helvetica Neue Helvetica Arial sans-serif",
              border: "1px solid gray",
              width: "95%",
              margin: "15px",
              height: "40px",
              borderRadius: "5px",
            }}
            placeholder="Locality"
          />
          <input
            onChange={(e) => setCity(e.target.value)}
            value={city}
            type={"text"}
            style={{
              textAlign: "start",
              padding: "5px",
              fontFamily:
                "Clear Sans Helvetica Neue Helvetica Arial sans-serif",
              border: "1px solid gray",
              width: "95%",
              margin: "15px",
              height: "40px",
              borderRadius: "5px",
            }}
            placeholder="City"
          />
          <input
            onChange={(e) => setState(e.target.value)}
            value={state}
            type={"text"}
            style={{
              textAlign: "start",
              padding: "5px",
              fontFamily:
                "Clear Sans Helvetica Neue Helvetica Arial sans-serif",
              border: "1px solid gray",
              width: "95%",
              margin: "15px",
              height: "40px",
              borderRadius: "5px",
            }}
            placeholder="State"
          />
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type={""}
            style={{
              textAlign: "start",
              padding: "5px",
              fontFamily:
                "Clear Sans Helvetica Neue Helvetica Arial sans-serif",
              border: "1px solid gray",
              width: "95%",
              margin: "15px",
              height: "40px",
              borderRadius: "5px",
            }}
            placeholder="Customer Name"
          />
          <input
            onChange={(e) => setMobile(e.target.value)}
            value={mobile}
            type={"tel"}
            style={{
              textAlign: "start",
              padding: "5px",
              fontFamily:
                "Clear Sans Helvetica Neue Helvetica Arial sans-serif",
              border: "1px solid gray",
              width: "95%",
              margin: "15px",
              height: "40px",
              borderRadius: "5px",
            }}
            placeholder="10 Digits Mobile Number"
          />
          <ResizeExample />
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyItems: "end",
              justifyContent: "end",
            }}
          >
            <button
              style={{
                backgroundColor: "white",
                color: "#ff6f61",
                fontFamily:
                  "Clear Sans Helvetica Neue HelveticaArial sans-serif",
                fontSize: "15px",
                width: "100px",
                height: "40px",
              }}
            >
              {" "}
              CANCEL
            </button>
            <Button
              onClick={eventHandler}
              style={{
                backgroundColor: "#ff6f61",
                color: "white",
                fontFamily:
                  "Clear Sans Helvetica Neue HelveticaArial sans-serif",
                fontSize: "15px",
                width: "100px",
                height: "40px",
              }}
              isDisabled={
                add == "" ||
                pin == "" ||
                local == "" ||
                city == "" ||
                state == "" ||
                mobile == "" ||
                name == ""
              }
            >
              SAVE
            </Button>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Payment;
