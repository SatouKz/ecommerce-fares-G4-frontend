import React from "react";
import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";
import FormCategorys from "./FormCategorys";

const FormProducts = () => {
  return (
    <Center w="100%" h="100vh">
      <FormControl w="65%" p="2rem" boxShadow="xl">
        <Text fontSize="2xl" fontWeight="medium" mb="1rem">
          Sube un nuevo producto
        </Text>
        <FormLabel htmlFor="name">Nombre</FormLabel>
        <Input type="email" placeholder="Product Name" />
        <FormLabel htmlFor="description" mt=".4rem">
          Descripción
        </FormLabel>
        <Input type="email" placeholder="Description" />
        <FormLabel htmlFor="price" mt=".4rem">
          Precio
        </FormLabel>
        <NumberInput min={1}>
          <NumberInputField id="price" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormLabel htmlFor="stock" mt=".4rem">
          Stock
        </FormLabel>
        <NumberInput min={1}>
          <NumberInputField id="stock" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Text fontSize="2xl" fontWeight="medium" mb="1rem">
          Categorias
        </Text>
        <FormCategorys />
        <Button mt="1rem" colorScheme="purple" type="submit" size="md">
          Crear producto
        </Button>
      </FormControl>
    </Center>
  );
};

export default FormProducts;
