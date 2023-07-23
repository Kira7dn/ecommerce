import { Item } from "@/state/api";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";
import { tokens } from "@/theme";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtoCart } from "@/state/cartReducer";

type Props = {
  item: Item;
};

const ProductCard = ({ item }: Props) => {
  const api = import.meta.env.VITE_BASE_URL;
  const { price, name, image } = item.attributes;
  const [isHovered, setIsHover] = useState(false);

  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    data: {
      attributes: {
        formats: {
          medium: { url },
        },
      },
    },
  } = image;

  return (
    <Card
      sx={{ position: "relative" }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Box
        display={{ md: isHovered ? "block" : "none", xs: "block" }}
        position="absolute"
        bottom="20%"
        left="0"
        width="100%"
        padding="0 5%"
        zIndex={1}
      >
        <Box display="flex" justifyContent="space-between">
          <Box
            display="flex"
            alignItems="center"
            sx={{
              backgroundColor: tokens.neutral[80],
              borderRadius: "4px",
            }}
          >
            <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
              <Remove />
            </IconButton>
            <Typography color={tokens.primary[30]}>{count}</Typography>
            <IconButton onClick={() => setCount(count + 1)}>
              <Add />
            </IconButton>
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              dispatch(
                addtoCart({
                  item: {
                    ...item,
                    count,
                  },
                })
              );
              setCount(1);
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
      <CardActionArea onClick={() => navigate(`/item/${item.id}`)}>
        <CardMedia
          component="img"
          image={`${api}${url}`}
          height="400px"
        ></CardMedia>
        <CardContent>
          <Typography variant="h3" gutterBottom noWrap>
            {name}
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 600 }} gutterBottom>
            ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
