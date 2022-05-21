import React from "react";
import Card from "../components/Card";
import { Container, Grid } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
const ShowProducts = () => {
  const location = useLocation();
  const { title, description, price, image } = location.state;
  return (
    <Container p="0" m="0 auto" maxW={"20%"}>
      <Grid gridTemplateColumns={["repeat(1fr)"]}>
        <Card
          title={title}
          description={description}
          price={price}
          image={image}
        />
      </Grid>
    </Container>
  );
};

export default ShowProducts;
