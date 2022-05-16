import { FormLabel, Input } from "@chakra-ui/react";
import React from "react";

const FormCategorys = () => {
  return (
    <div>
      <FormLabel htmlFor="category" fontWeight="semibold" mt=".4rem">
        Category
      </FormLabel>
      <Input id="category" type="email" placeholder="Product Category" />
    </div>
  );
};

export default FormCategorys;
