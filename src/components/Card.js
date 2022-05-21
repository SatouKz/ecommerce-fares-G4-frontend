import React, { useState } from "react";
import { Box, Image, Text, Stack, Button, Flex } from "@chakra-ui/react";
import { BsHeartFill } from "react-icons/bs";
const Card = ({ image, title, description, price }) => {
  const [state, setState] = useState({ fav: false });
  return (
    <Box py={12}>
      <Box
        py={0}
        overflow={"hidden"}
        transition="all 0s ease"
        _hover={{
          transition: "all 0s ease",
          border: "1px solid #7401DF",
        }}
      >
        {/* Favourite Icon */}
        <Flex>
          <Box
            ml="auto"
            mt="0.5rem"
            mr="0.5rem"
            position="relative"
            h={1}
            onClick={() => setState({ ...state, fav: !state.fav })}
            cursor={"pointer"}
            fontSize={"1.7rem"}
          >
            {state.fav ? (
              <Box transition="all 500ms ease">
                <BsHeartFill color={"red"} />
              </Box>
            ) : (
              <Box
                _hover={{
                  transform: "scale(1.04)",
                  transition: "all 500ns ease",
                }}
              >
                <BsHeartFill color={"gray"} />
              </Box>
            )}
          </Box>
        </Flex>
        {/* Image */}
        <Box>
          <Image src={image} alt="image not found" />
        </Box>
        <Box p={5} bg="white">
          <Text as="h2" fontSize={"2xl"} letterSpacing="wide">
            {title}
          </Text>
          {/* Product description */}
          <Text color="gray.500" letterSpacing="wide" py={2}>
            {description}
          </Text>
          {/* Product price */}
          <Text fontWeight={600} fontSize={"2xl"} py={2}>
            ${price}
          </Text>
          {/* Button */}
          <Stack>
            <Button
              colorScheme="purple"
              spacing={4}
              direction="row"
              align="center"
              size="md"
              borderRadius="0"
            >
              Add to cart
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
export default Card;
