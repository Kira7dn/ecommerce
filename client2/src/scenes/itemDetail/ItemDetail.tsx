import { useGetItemDetailQuery, useGetItemsQuery } from "@/state/api";
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, IconButton, Button, Grid } from "@mui/material";
import { Add, FavoriteBorderOutlined, Remove } from "@mui/icons-material";
import { tokens } from "@/theme";
import { addtoCart } from "@/state/cartReducer";
import { useAppDispatch } from "@/state/hooks";
import ProductCard from "@/components/ProductCard";
import Loader from "@/components/Loader";

function getRandomValuesFromArray<T>(arr: T[], numValues: number): T[] {
  const result: T[] = [];
  const usedIndexes: { [key: number]: boolean } = {};

  while (result.length < numValues) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    if (!usedIndexes[randomIndex]) {
      result.push(arr[randomIndex]);
      usedIndexes[randomIndex] = true;
    }
  }

  return result;
}
const ItemDetail = () => {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(1);
  const { itemId } = useParams();
  const { data: itemDetailData, isLoading } = useGetItemDetailQuery(itemId);
  const { data: itemsData } = useGetItemsQuery(19645);
  const itemDetail = useMemo(() => {
    return itemDetailData && itemDetailData;
  }, [itemDetailData]);
  if (isLoading) {
    return (
      <Box width="80%" m="80px auto">
        <Loader />
      </Box>
    );
  }
  if (itemDetailData && itemsData) {
    const randomItems =
      itemsData && getRandomValuesFromArray(itemsData.products, 4);
    const item = {
      id: itemDetail?.id || "1",
      name: itemDetail?.name || "sample",
      price: itemDetail?.price || {
        current: {
          text: "50",
          value: 50,
        },
      },
      brandName: itemDetail?.brand.name || "sample",
      imageUrl: itemDetail?.media.images[0].url || "sample",
    };
    return (
      <Box width="80%" m="80px auto">
        <Box display="flex" flexWrap="wrap" columnGap="40px">
          {/* IMAGES */}
          <Box flex="1 1 40%" mb="40px">
            <img
              alt={itemDetail?.name}
              width="100%"
              height="100%"
              src={`https://${itemDetail?.media.images[0].url}`}
              style={{ objectFit: "contain" }}
            />
          </Box>

          {/* ACTIONS */}
          <Box flex="1 1 50%" mb="40px">
            <Box display="flex" justifyContent="space-between">
              <Box>Home/Item</Box>
              <Box>Prev Next</Box>
            </Box>

            <Box m="65px 0 25px 0">
              <Typography variant="h3">{itemDetail?.name}</Typography>
              <Typography>${itemDetail?.price.current.value}</Typography>
              <Typography sx={{ mt: "20px" }}>
                {itemDetail?.brand.name}
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" minHeight="50px">
              <Box
                display="flex"
                alignItems="center"
                border={`1.5px solid ${tokens.neutral[30]}`}
                mr="20px"
                p="2px 5px"
              >
                <IconButton onClick={() => setCount(Math.max(count - 1, 0))}>
                  <Remove />
                </IconButton>
                <Typography sx={{ p: "0 5px" }}>{count}</Typography>
                <IconButton onClick={() => setCount(count + 1)}>
                  <Add />
                </IconButton>
              </Box>
              <Button
                sx={{
                  backgroundColor: "#222222",
                  color: "white",
                  borderRadius: 0,
                  minWidth: "150px",
                  padding: "10px 40px",
                }}
                onClick={() =>
                  itemDetail &&
                  dispatch(addtoCart({ cartItem: { item, count } }))
                }
              >
                ADD TO CART
              </Button>
            </Box>
            <Box>
              <Box m="20px 0 5px 0" display="flex">
                <FavoriteBorderOutlined />
                <Typography sx={{ ml: "5px" }}>ADD TO WISHLIST</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* RELATED ITEMS */}
        <Box mt="50px" width="100%">
          <Typography variant="h3" fontWeight="bold">
            Related Products
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{
              padding: "16px 0",
            }}
          >
            {randomItems?.map((item) => {
              return (
                <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                  <ProductCard item={item} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    );
  }
};

export default ItemDetail;
