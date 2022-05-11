import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

const NewCategory = () => {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize="50px">
          Crear una nueva Categoria
        </Heading>
        <FormControl id="nombre" isRequired>
          <FormLabel fontSize={"40px"}>Nombre de la nueva Categoria</FormLabel>
          <Input
            width={"35rem"}
            height="30px"
            placeholder="Nombre.."
            _placeholder={{ color: "gray.500" }}
            type="text"
          />
        </FormControl>
        <FormControl id="descripcion" isRequired>
          <FormLabel fontSize={"40px"}>
            Descripcion de la nueva Categoria
          </FormLabel>
          <Input
            height={"10rem"}
            width="35rem"
            type="text"
            placeholder="Descripcion.."
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={"blue.400"}
            color={"black"}
            _hover={{
              bg: "blue.500",
            }}
          >
            Añadir Categoria
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default NewCategory;
