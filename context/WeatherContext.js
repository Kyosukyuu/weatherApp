import { createContext, useState } from "react";

const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {
  const [location, setLocation] = useState("queens");
  const [unitMode, setUnitMode] = useState("imperial");

  return (
    <WeatherContext.Provider
      value={{ location, setLocation, unitMode, setUnitMode }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherContextProvider };
