import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../src/components/Layout";
import { AppProvider } from "../src/context/contextApp";
import "../styles/index.css";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </ChakraProvider>
  );
}
export default MyApp;
