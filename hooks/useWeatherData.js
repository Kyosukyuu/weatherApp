import { useContext } from "react";
import useSWR from "swr";
import { WeatherContext } from "../context/WeatherContext";
import fetcher from "../helpers/fetcher";

export default function useWeatherData() {
  const { location } = useContext(WeatherContext);

  if (location !== "") {
    const { data: current, error: currentError } = useSWR(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=imperial`,
      fetcher
    );
    const { data: forecast, error: forecastError } = useSWR(
      () =>
        `https://api.openweathermap.org/data/2.5/onecall?lat=${current.coord.lat}&lon=${current.coord.lon}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=imperial`,
      fetcher
    );
    console.log(current);
    return { current, currentError, forecast, forecastError };
  }
  return {};
}
