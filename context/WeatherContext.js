import { createContext, useState } from "react";

const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {
  const [location, setLocation] = useState("Queens");
  return (
    <WeatherContext.Provider value={{ location, setLocation }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherContextProvider };
