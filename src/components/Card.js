import React from "react";
import { Box, Image, Text, Stack, Button } from "@chakra-ui/react";

const Card = ({ products }) => {
  return (
    <Box
      w="350px"
      rounded="10px"
      overflow="hidden"
      boxShadow="lg"
      bg="gray.200"
      m="1rem"
      // d= {products.display}
      border="2px"
      borderColor="gray.500"
    >
      <Image src={products.image} alt="image not found" />
      <Box p={5} bg="white">
        <Stack isInline align="base-line" justify="space-between">
          <Text
            as="h2"
            // fontFamily=''
            fontSize="1.5rem"
            letterSpacing="wide"
          >
            {products.tittle}
          </Text>
        </Stack>
        <Text color="gray.500" letterSpacing="wide">
          {products.description}
        </Text>
        <Stack>
          <Button
            colorScheme="purple"
            spacing={4}
            direction="row"
            align="center"
            size="md"
          >
            Comprar Ahora
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
export default Card;
