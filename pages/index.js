import { Box, Container, Flex } from "@chakra-ui/react";
import CurrentInfo from "../components/CurrentInfo";
import CurrentInfo2 from "../components/CurrentInfo2";
import CurrentWeather from "../components/CurrentWeather";
import ForecastWeather from "../components/ForecastWeather";
import LocationForm from "../components/LocationForm";
import PageHead from "../components/PageHead";

export default function Home() {
  return (
    <Box>
      <PageHead
        title="Weather App"
        desc="A simple weather app with data sourced by OpenWeather"
        author="Kyosukyuu"
        summary="Weather webapp"
      />

      <Box as="main" bg="gray.800" mb={5}>
        <Container maxW="container.xl">
          <LocationForm />
          <Flex
            as="article"
            mt={5}
            gridGap={5}
            alignItems="flex-start"
            direction={{ base: "column", sm: "column", md: "row" }}
            flexWrap="wrap"
          >
            <CurrentWeather />
            <CurrentInfo />
            <ForecastWeather />
            <CurrentInfo2 />
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
