import Footer from "@/components/footer";
import CartNavbar from "@/components/navbar/cartNavbar/CartNavbar";
import MainNavbar from "@/components/navbar/MainNavbar/MainNavbar";
import PaymentNavbar from "@/components/navbar/paymentNavbar/PaymentNavbar";
import { store } from "@/redux/store";
import { theme } from "@/utils/theme";
import { Box, ChakraProvider, useColorMode } from "@chakra-ui/react";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { Provider } from "react-redux";
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  const { colorMode } = useColorMode();
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>

        <Box zIndex={'10'} top='90vh' position='fixed' left={{
          base: '90%',
          sm: "90%",
          md: "90%",
          lg: "95%",
          xl: "95%",
          "2xl": "95%",
        }} color={colorMode === "light"
          ? "black"
          : "500"} onClick={() => {
            window.scroll({
              top: 0,
              left: 100,
              behavior: 'smooth'
            });
          }}><BsArrowUpCircleFill size={'40px'} /></Box>
        <Component {...pageProps} />
        {/* <Footer /> */}
      </Provider>
    </ChakraProvider>)
}
