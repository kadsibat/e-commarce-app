import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { AppContext } from "../context/AppContext";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const { product } = React.useContext(AppContext);
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {product?.map((item) => {
          return (
            <Grid xs={12} sm={6} md={4}  key={item.id}>
              <ProductCard item={item}/>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
