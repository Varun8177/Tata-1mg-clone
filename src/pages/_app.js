import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import { store } from "@/redux/store";
import { theme } from "@/utils/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </ChakraProvider>)
}
