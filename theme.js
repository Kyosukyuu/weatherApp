import { extendTheme } from "@chakra-ui/react";

const configs = {
  styles: {
    global: {
      "html, body": { padding: 0, margin: 0 },
    },
  },
};

const theme = extendTheme(configs);

export default theme;
