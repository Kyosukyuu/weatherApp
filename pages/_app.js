import { ChakraProvider } from "@chakra-ui/react";
import { WeatherContextProvider } from "../context/WeatherContext";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <WeatherContextProvider>
        <Component {...pageProps} />
      </WeatherContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
