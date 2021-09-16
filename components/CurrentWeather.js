import {
  Box,
  Heading,
  Text,
  Image,
  Icon,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";
import useWeatherData from "../hooks/useWeatherData";
import { useContext, useState, useEffect } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { DateTime } from "luxon";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function CurrentWeather() {
  const { unitMode } = useContext(WeatherContext);
  const { current } = useWeatherData();
  const [currentTime, setCurrentTime] = useState();

  useEffect(() => {
    if (current) setCurrentTime(DateTime.fromMillis(current.dt * 1000));
  }, [current]);

  return (
    <>
      {current && current.cod !== "404" && (
        <MotionBox
          as="section"
          color="white"
          bg="gray.700"
          boxShadow="lg"
          rounded="base"
          p={4}
          w="100%"
          flex="1 1 40%"
          initial={{ opacity: 0, top: -5 }}
          animate={{ opacity: 1, top: 0, transition: { delay: 0.1 } }}
        >
          <Flex justifyContent="space-between">
            <VStack alignItems="flex-start">
              <Flex direction="column">
                <Flex alignItems="center">
                  <Icon as={MdLocationOn} fontSize={30} mr={1} mt={1} />
                  <Heading fontSize="4xl">
                    {`${current.name}, ${current.sys.country}`}
                  </Heading>
                </Flex>

                <Text opacity="0.7" fontWeight="light" ml={1}>
                  {currentTime && currentTime.weekdayShort},{" "}
                  {currentTime && currentTime.monthLong}{" "}
                  {currentTime && currentTime.day}{" "}
                  {currentTime && currentTime.hour > 12
                    ? currentTime && currentTime.hour - 12
                    : currentTime && currentTime.hour}
                  :
                  {currentTime && currentTime.minute < 10
                    ? "0" + currentTime && currentTime.minute
                    : currentTime && currentTime.minute}{" "}
                  {currentTime && Number(currentTime.hour) > 12 ? "PM" : "AM"}
                </Text>
              </Flex>
              <Flex m="0 !important">
                <Image
                  src={
                    current &&
                    `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`
                  }
                  ml={-4}
                />
                <Text fontSize="6xl">{`${Math.round(current.main.temp)}°${
                  unitMode === "imperial" ? "F" : "C"
                }`}</Text>
              </Flex>
            </VStack>

            <VStack
              alignItems="flex-end"
              alignSelf="stretch"
              fontWeight="light"
            >
              <Text
                m="0 !important"
                fontSize="2xl"
                opacity="0.9"
                height="100%"
              >{`${current.weather[0].main}`}</Text>
              <Text
                m="0 !important"
                fontSize="2xl"
                opacity="0.9"
                height="100%"
              >{`${Math.round(current.main.temp_max)}° / ${Math.round(
                current.main.temp_min
              )}°`}</Text>
              <Text m="0 !important" fontSize="2xl" opacity="0.9" height="100%">
                Feels like{" "}
                {`${Math.round(current.main.feels_like)}°
      `}
              </Text>
            </VStack>
          </Flex>
        </MotionBox>
      )}
    </>
  );
}
