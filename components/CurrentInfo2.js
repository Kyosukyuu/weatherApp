import { Box, VStack, StackDivider } from "@chakra-ui/react";
import useWeatherData from "../hooks/useWeatherData";
import CurrentInfoItem from "./CurrentInfoItem";
import { MdInvertColors, MdWbSunny } from "react-icons/md";
import { WiSunrise, WiSunset } from "react-icons/wi";
import { DateTime } from "luxon";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function CurrentInfo2() {
  const { forecast } = useWeatherData();

  return (
    <>
      {forecast && (
        <MotionBox
          as="section"
          color="white"
          bg="gray.700"
          boxShadow="lg"
          rounded="base"
          p={4}
          w="100%"
          flex="0.5 1 20%"
          initial={{ opacity: 0, top: -5 }}
          animate={{ opacity: 1, top: 0, transition: { delay: 0.1 * 4 } }}
        >
          <VStack divider={<StackDivider borderColor="gray.200" as="hr" />}>
            <CurrentInfoItem
              icon={MdInvertColors}
              title="Dew Point"
              text={`${Math.round(forecast.current.dew_point)}°`}
            />
            <CurrentInfoItem
              icon={MdWbSunny}
              title="UV Index"
              text={`${Math.round(forecast.current.uvi)} of 10`}
            />
            <CurrentInfoItem
              icon={WiSunrise}
              title="Sunrise"
              text={`${
                DateTime.fromMillis(forecast.current.sunrise * 1000).hour > 12
                  ? DateTime.fromMillis(forecast.current.sunrise * 1000).hour -
                    12
                  : DateTime.fromMillis(forecast.current.sunrise * 1000).hour
              }:${
                DateTime.fromMillis(forecast.current.sunrise * 1000).minute < 10
                  ? "0" +
                    DateTime.fromMillis(forecast.current.sunrise * 1000).minute
                  : DateTime.fromMillis(forecast.current.sunrise * 1000).minute
              } ${
                DateTime.fromMillis(forecast.current.sunrise * 1000).hour > 12
                  ? "PM"
                  : "AM"
              }`}
            />
            <CurrentInfoItem
              icon={WiSunset}
              title="Sunset"
              text={`${
                DateTime.fromMillis(forecast.current.sunset * 1000).hour > 12
                  ? DateTime.fromMillis(forecast.current.sunset * 1000).hour -
                    12
                  : DateTime.fromMillis(forecast.current.sunset * 1000).hour
              }:${
                DateTime.fromMillis(forecast.current.sunset * 1000).minute < 10
                  ? "0" +
                    DateTime.fromMillis(forecast.current.sunset * 1000).minute
                  : DateTime.fromMillis(forecast.current.sunset * 1000).minute
              } ${
                DateTime.fromMillis(forecast.current.sunset * 1000).hour > 12
                  ? "PM"
                  : "AM"
              }`}
            />
          </VStack>
        </MotionBox>
      )}
    </>
  );
}
