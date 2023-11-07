import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";

const Container2 = () => {
  return (
    <SimpleGrid columns={[2, null, 3]} spacing="40px">
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
    </SimpleGrid>
  );
};

export default Container2;
