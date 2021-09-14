import useWeatherData from "../hooks/useWeatherData";
import { Box } from "@chakra-ui/react";

export default function ForecastWeather() {
  const { forecast } = useWeatherData();
  return <> {forecast && <Box></Box>}</>;
}
