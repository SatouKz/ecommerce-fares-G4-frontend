import React from "react";
import Card from "../components/Card";
import products from "../assets/products";
import { Box, Center } from "@chakra-ui/react";

const ProductCard = () => {
  return (
    <Box className="container" w={["100%"]}>
      <Center>
        <Box
          mt="1rem"
          d="grid"
          gridTemplateColumns={[
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(3,1fr)",
          ]}
        >
          {products.map((product, index) => (
            <Card key={index} products={product} />
          ))}
        </Box>
      </Center>
    </Box>
  );
};
export default ProductCard;
