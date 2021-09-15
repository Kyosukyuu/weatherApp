import { Box, VStack, StackDivider } from "@chakra-ui/react";
import useWeatherData from "../hooks/useWeatherData";
import CurrentInfoItem from "./CurrentInfoItem";
import { MdInvertColors, MdWbSunny } from "react-icons/md";

export default function CurrentInfo2() {
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
          flex="1"
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
          </VStack>
        </Box>
      )}
    </>
  );
}
