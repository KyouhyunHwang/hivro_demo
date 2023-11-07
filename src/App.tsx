import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import Container1 from "./container1";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Container1 />
      {/* <Container2 /> */}
    </Box>
  </ChakraProvider>
);
