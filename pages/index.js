import { Box, Container } from "@chakra-ui/react";
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
        <Container maxW="container.lg">
          <LocationForm />
          <CurrentWeather />
        </Container>
      </Box>
    </Box>
  );
}
