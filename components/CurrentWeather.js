import {
  Box,
  Heading,
  Text,
  Image,
  Icon,
  Flex,
  VStack,
} from "@chakra-ui/react";
import useWeatherData from "../hooks/useWeatherData";
import { MdLocationOn } from "react-icons/md";
import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

export default function CurrentWeather() {
  const { unitMode } = useContext(WeatherContext);
  const { current } = useWeatherData();
  return (
    <>
      {current && current.cod !== "404" && (
        <Box
          color="white"
          boxShadow="lg"
          rounded="base"
          bg="gray.700"
          p={4}
          mt={5}
          maxWidth="650px"
        >
          <Flex justifyContent="space-between" flexWrap="wrap">
            <VStack alignItems="flex-start">
              <Flex alignItems="center">
                <Icon as={MdLocationOn} fontSize={30} mr={1} mt={1} />
                <Heading>
                  {`${current && current.name}, ${
                    current && current.sys.country
                  }`}
                </Heading>
              </Flex>
              <Flex m="0 !important">
                <Image
                  src={
                    current &&
                    `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`
                  }
                  ml={-4}
                />
                <Text fontSize="6xl">{`${
                  current && Math.round(current.main.temp)
                }°${unitMode === "imperial" ? "F" : "C"}`}</Text>
              </Flex>
            </VStack>

            <VStack
              alignItems="flex-end"
              alignSelf="self-start"
              fontWeight="light"
            >
              <Text m="0 !important" fontSize="2xl" opacity="0.9">{`${
                current && current.weather[0].main
              }`}</Text>
              <Text m="0 !important" fontSize="2xl" opacity="0.9">{`${
                current && Math.round(current.main.temp_max)
              }° / ${Math.round(current && current.main.temp_min)}°`}</Text>
              <Text m="0 !important" fontSize="2xl" opacity="0.9">
                Feels like{" "}
                {`${current && Math.round(current.main.feels_like)}°
      `}
              </Text>
            </VStack>
          </Flex>
        </Box>
      )}
    </>
  );
}
