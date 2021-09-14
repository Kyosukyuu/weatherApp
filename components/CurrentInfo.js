import { Box, VStack, StackDivider, Flex } from "@chakra-ui/react";
import useWeatherData from "../hooks/useWeatherData";
import { MdImportExport } from "react-icons/md";
import { WiHumidity, WiStrongWind } from "react-icons/wi";
import CurrentInfoItem from "./CurrentInfoItem";
import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const infoObj = {};

export default function CurrentInfo() {
  const { unitMode } = useContext(WeatherContext);
  const { current } = useWeatherData();

  return (
    <>
      {current && (
        <Box
          as="section"
          rounded="base"
          boxShadow="lg"
          color="white"
          bg="gray.700"
          flex="0.5"
          w="100%"
          p={4}
        >
          <VStack divider={<StackDivider borderColor="gray.200" as="hr" />}>
            <CurrentInfoItem
              icon={MdImportExport}
              title="Pressure"
              text={`${(current.main.pressure / 30.031992783659565).toFixed(
                2
              )} in`}
            />

            <CurrentInfoItem
              icon={WiHumidity}
              title="Humidity"
              text={`${current.main.humidity}%`}
            />

            <CurrentInfoItem
              icon={WiStrongWind}
              title="Wind"
              text={`${Math.round(current.wind.speed)} ${
                unitMode === "imperial" ? "mph" : "mps"
              }`}
            />
          </VStack>
        </Box>
      )}
    </>
  );
}
