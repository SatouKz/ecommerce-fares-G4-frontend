import React from "react";
import {
  Container,
  Grid,
  Image,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Input,
  Divider,
} from "@chakra-ui/react";
import { useNumberInput } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
const ProductDetails = () => {
  const location = useLocation();
  const { title, description, price, image } = location.state;
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 99,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <Container
      my="4rem"
      maxW="container.md"
      h="430px"
      // border="1px solid black"
      borderRadius="xl"
      boxShadow="dark-lg"
      // bgColor="gray.100"
    >
      <Grid templateColumns="repeat(2, 1fr)" gap={-10}>
        <Box
          my="1rem"
          bgColor="white"
          // border="0.5px solid crimson"
          h="350px"
          maxW="300px"
          borderRadius={"lg"}
          boxShadow="inner"
          borderBottom="inner"
        >
          <Image
            src={image}
            maxW="300px"
            maxH="300px"
            // border="1px solid black"
            my="2rem"
          />
        </Box>
        {/* Info */}
        <Box
          // border="1px solid crimson"
          h="350px"
          d="flex"
          align="center"
          boxShadow="inner"
          mt="1rem"
        >
          <Heading color="crimson">{title}</Heading>
          <Text>${price}</Text>
          <Text>{description}</Text>
          <Divider />
          {/* Cantidades */}
          <VStack my="1rem">
            <Text>Cantidad:</Text>
            <HStack maxW="320px">
              <Button {...dec} colorScheme="purple">
                -
              </Button>
              <Input {...input} w="50px" />
              <Button {...inc} colorScheme="purple">
                +
              </Button>
            </HStack>
          </VStack>
          <Divider />
          {/* Botones */}
          <VStack mt="1rem">
            <Button
              colorScheme="purple"
              // size="md"
              w="150px"
              borderRadius="lg"
            >
              Agregar al carrito
            </Button>
            <Divider />
            <Button colorScheme="purple" w="150px" borderRadius="lg">
              Comprar Ahora
            </Button>
          </VStack>
        </Box>
      </Grid>
    </Container>
  );
};

export default ProductDetails;
