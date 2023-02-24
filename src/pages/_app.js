import Footer from "@/components/footer";
import CartNavbar from "@/components/navbar/cartNavbar/CartNavbar";
import MainNavbar from "@/components/navbar/MainNavbar/MainNavbar";
import PaymentNavbar from "@/components/navbar/paymentNavbar/PaymentNavbar";
import { store } from "@/redux/store";
import { theme } from "@/utils/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <MainNavbar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </ChakraProvider>)
}
