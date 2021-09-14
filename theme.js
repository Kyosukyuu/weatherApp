import { extendTheme } from "@chakra-ui/react";

const configs = {
  styles: {
    global: {
      "html, body": { padding: 0, margin: 0, height: "100%" },
      body: { background: "gray.800" },
    },
  },
};

const theme = extendTheme(configs);

export default theme;
