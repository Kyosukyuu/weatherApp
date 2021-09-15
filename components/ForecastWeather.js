import useWeatherData from "../hooks/useWeatherData";
import { Box } from "@chakra-ui/react";

export default function ForecastWeather() {
  const { forecast } = useWeatherData();
  console.log(forecast);
  return (
    <>
      {forecast && (
        <>
          <Box
            as="section"
            color="white"
            bg="gray.700"
            boxShadow="lg"
            rounded="base"
            p={4}
            w="100%"
            flexBasis="65%"
          ></Box>
        </>
      )}
    </>
  );
}
