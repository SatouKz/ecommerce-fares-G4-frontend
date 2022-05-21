import React from "react";
import Card from "../components/Card";
import { Container, Grid } from "@chakra-ui/react";
// Ayudita de misa
import { useLocation } from "react-router-dom";
const ShowProducts = () => {
  //Ayudita de misa
  const location = useLocation();
  const { title, description, price, image } = location.state; //const data = location.state?.data;
  return (
    <Container p="0" m="0 auto" maxW={"20%"}>
      <Grid gridTemplateColumns={["repeat(1fr)"]}>
        {/* Ayudita de misa */}
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
