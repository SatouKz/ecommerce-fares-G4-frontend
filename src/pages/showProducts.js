import React from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { Container, Grid } from "@chakra-ui/react";

const ShowProducts = ({ productData }) => {
  let { id } = useParams();
  return (
    <Container p="0" m="0 auto" maxW={"20%"}>
      <Grid gridTemplateColumns={["repeat(1fr)"]}>
        {productData
          // eslint-disable-next-line eqeqeq
          ?.filter((card) => card.id == id)
          .map((cards) => (
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

export default ShowProducts;
