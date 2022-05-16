import React from "react";
import {
  Container,
  Box,
  Text,
  Heading,
  Button,
  Flex,
  Image,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
const ProductDetails = ({ products }) => {
  let { id } = useParams();
  return (
    <Container>
      {products
        // eslint-disable-next-line eqeqeq
        ?.filter((details) => details.id == id)
        .map((detail, index) => (
          <Box
            className="contenedor"
            key={index}
            display="flex"
            justifyContent="center"
            align="center"
            p="0 auto"
            mt="4rem"
            overflow="hidden"
            border="1px solid black"
            boxShadow="2xl"
            w="100%"
          >
            <Flex>
              <Box className="product" border="1px solid black ">
                <Image
                  src={detail.image}
                  to={`/products/${detail.id}`}
                  alt="image not found"
                  maxW="20rem"
                  mt="3rem"
                  border="1px solid black"
                />
              </Box>
              <Box
                className="details"
                maxW="20rem"
                border="1px solid black"
                mx="2rem"
              >
                <Box className="titulo">
                  <Heading
                    mb={4}
                    className="title"
                    // color="#3a3a3a"
                    // fontWeight="600"
                    // fontSize="1.2rem"
                    // textTransform="uppercase"
                  >
                    {detail.title}
                  </Heading>
                </Box>
                <Box className="description">
                  <Text fontSize="xl">{detail.description}</Text>
                </Box>
                <Box className="comprar">
                  <Button size="lg" colorScheme="green" mt="24px">
                    Comprar Ahora
                  </Button>
                </Box>
              </Box>
            </Flex>
          </Box>
        ))}
    </Container>
  );
};

export default ProductDetails;
