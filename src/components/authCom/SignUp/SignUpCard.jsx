import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Center,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import SignUpCarousel from "./SignUpCarousel";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "config/firebase";
import { createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { userRegister } from "@/redux/auth/action";
import { useRouter } from "next/router";
import SignInModal from "../SignIn/SignInModal";

export default function SignUpCard() {
  const [emptyInputError, setEmptyInputError] = useState(false)
  const { isAuth, userName } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const router = useRouter();
  const [name, setName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPass, setRegisterPass] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [load, setLoad] = useState(false);
  const toast = useToast();
  const handleSignUp = async () => {
    if(!name.length || !registerEmail || !registerPass){
      setEmptyInputError(true)
    } else {
      setEmptyInputError(false)
    setLoad(true);
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPass
      );

      const user = await res.user;
      setLoad(false);
      await updateProfile(user, {
        displayName: name,
      });
      toast({
        title: "Signup Successfull",
        description: `You are successfully registered`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error.message)
      toast({
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setLoad(false);
    } }
    await signOut(auth);
  };
  return (
    <Flex
      minH={"60vh"}
      maxW={"60vw"}
      align={"center"}
      justify={"center"}
      flexDirection={{ base: "column", md: "row", lg: "row" }}
      margin="auto"
      mt="10vh"
      borderRadius="15px"
    >
      <SignUpCarousel />
      <Stack
        spacing={8}
        mx={"auto"}
        w={{ base: "100%",sm: "100%", md: "50%", lg: "50%" }}
        // py={12}
        // px={6}
      >
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <Box>
              <Center>
                <Heading>Sign up</Heading>
              </Center>
            </Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel> Name</FormLabel>
                  <Input
                  w="100%"
                    type="text"
                    // w={"310px"}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                onChange={(e) => setRegisterEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setRegisterPass(e.target.value)}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              {emptyInputError ?  <Text color="tomato" textAlign="center">All Fields required</Text> : null}
           
              <Button
                isLoading={load}
                loadingText="Submitting"
                size="lg"
                color={"white"}
                bg={"#ff6f61"}
                _hover={{
                  bg: "#fd7c70",
                }}
                onClick={handleSignUp}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user? <SignInModal />
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
