import useWeatherData from "../hooks/useWeatherData";
import { Box, Flex, Text, Center, Image, Heading } from "@chakra-ui/react";
import { DateTime } from "luxon";

export default function ForecastWeather() {
  const { forecast } = useWeatherData();
  return (
    <>
      {forecast && (
        <Box
          as="section"
          color="white"
          bg="gray.700"
          boxShadow="lg"
          rounded="base"
          p={4}
          w="100%"
          flex="1 1 40%"
        >
          <Heading fontSize="4xl" textAlign="center" mb={4}>
            Hourly
          </Heading>
          <Center gridGap={3} overflow="hidden">
            {forecast.hourly.slice(0, 7).map((weatherHr) => {
              return (
                <Flex
                  bg="gray.900"
                  p={4}
                  rounded="lg"
                  direction="column"
                  alignItems="center"
                  key={weatherHr.dt}
                >
                  <Text fontSize="sm" fontWeight="light" textAlign="center">
                    {DateTime.fromMillis(weatherHr.dt * 1000).hour > 12
                      ? DateTime.fromMillis(weatherHr.dt * 1000).hour - 12
                      : DateTime.fromMillis(weatherHr.dt * 1000).hour}
                    :00{" "}
                    {DateTime.fromMillis(weatherHr.dt * 1000).hour > 12
                      ? "PM"
                      : "AM"}
                  </Text>
                  <Image
                    src={`https://openweathermap.org/img/wn/${weatherHr.weather[0].icon}@2x.png`}
                  />
                  <Text fontSize="3xl">{Math.round(weatherHr.temp)}°</Text>
                </Flex>
              );
            })}
          </Center>
        </Box>
      )}
    </>
  );
}
