import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import useSWR from "swr";
import fetcher from "../helpers/fetcher";

export default function useWeatherData() {
  const { location, unitMode } = useContext(WeatherContext);

  if (location !== "") {
    const currentWeatherURL = new URL(
      "https://api.openweathermap.org/data/2.5/weather?"
    );
    const currentMappings = {
      q: location,
      appid: process.env.NEXT_PUBLIC_API_KEY,
      units: unitMode,
    };
    for (const prop in currentMappings)
      currentWeatherURL.searchParams.set(prop, currentMappings[prop]);
    const { data: current, error: currentError } = useSWR(
      currentWeatherURL,
      fetcher
    );

    const { data: forecast, error: forecastError } = useSWR(
      () =>
        `https://api.openweathermap.org/data/2.5/onecall?lat=${current.coord.lat}&lon=${current.coord.lon}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=${unitMode}`,
      fetcher
    );

    return { current, currentError, forecast, forecastError };
  }
  return {};
}
