import React from "react";
import { Container, Grid } from "@chakra-ui/react";
import Card from "../components/Card";
import productData from "../data/productData";
import { Link } from "react-router-dom";
const ProductCard = () => {
  return (
    <Container p="0" m="0 auto" maxW={"90%"}>
      <Grid gridTemplateColumns={["repeat(4,1fr)"]} gap="2.9rem">
        {productData.map((cards) => (
          <Link
            to={`/products/${cards.id}`}
            key={cards.id}
            state={{
              title: cards.title,
              description: cards.description,
              price: cards.price,
              image: cards.image,
            }}
          >
            <Card
              title={cards.title}
              description={cards.description}
              price={cards.price}
              image={cards.image}
            />
          </Link>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductCard;
