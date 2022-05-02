import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function ProductCard({item}) {
    console.log(item)
  return (
    <Card sx={{ maxWidth: 345,margin:"1rem auto"}}>
      <CardMedia
        component="img"
        height="300"
        image={item.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
            {item.title}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="p" color="text.secondary">
            {item.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to basket">
          <AddShoppingCartIcon />
        </IconButton>
        <IconButton aria-label="read more">
          <MoreHorizIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
