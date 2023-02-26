import { useEffect } from "react";
import Link from "next/link";
import { Box, Center, Button, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
const Final = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 3000);
  return (
    <>
      <Center h={"100vh"}>
        <Box>
          <Image
            src="https://tse1.mm.bing.net/th?id=OIP.MT07Og6cRde17N6Ga5IWfwHaFE&pid=Api&P=0"
            alt=""
          />
        </Box>
      </Center>
      <Center>
        <Link href="/">
          {" "}
          <Button style={{ backgroundColor: "red", color: "white" }}>
            Home
          </Button>
        </Link>
      </Center>
    </>
  );
};

export default Final;
