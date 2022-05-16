import React from "react";
import { Container, Grid } from "@chakra-ui/react";
import Card from "../components/Card";
import productData from "../data/productData";

const ProductCard = () => {
  return (
    <Container p="0" m="0 auto" maxW={"90%"}>
      <Grid gridTemplateColumns={["repeat(4,1fr)"]} gap="2.9rem">
        {productData.map((cards) => (
          <Card
            key={cards.id}
            title={cards.title}
            description={cards.description}
            price={cards.price}
            image={cards.image}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default ProductCard;
