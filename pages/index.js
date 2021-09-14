import { Box, Container, Flex } from "@chakra-ui/react";
import CurrentInfo from "../components/CurrentInfo";
import CurrentWeather from "../components/CurrentWeather";
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

      <Box as="main" bg="gray.800">
        <Container maxW="container.xl">
          <LocationForm />
          <Flex
            as="article"
            mt={5}
            gridGap={5}
            alignItems="flex-start"
            direction={{ base: "column", sm: "column", md: "row" }}
          >
            <CurrentWeather />
            <CurrentInfo />
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
