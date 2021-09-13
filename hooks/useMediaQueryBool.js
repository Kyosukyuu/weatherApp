import { useMediaQuery } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function useMediaQueryBool(mediaRule) {
  const mediaQuery = useMediaQuery(`(${mediaRule})`);
  const [isMediaQuery, setIsMediaQuery] = useState(false);

  useEffect(() => {
    if (mediaQuery !== isMediaQuery) setIsMediaQuery(mediaQuery);
  }, [mediaQuery]);

  return isMediaQuery;
}
