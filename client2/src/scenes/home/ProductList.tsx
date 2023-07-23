import Error from "@/components/Error";
import Loader from "@/components/Loader";
import ProductCard from "@/components/ProductCard";
import { useGetItemsQuery } from "@/state/api";
import { Box, Typography, Tabs, Tab, Grid } from "@mui/material";
import React, { useState, useMemo } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function onlyUnique(value: any, index: number, array: Array<any>) {
  return array.indexOf(value) === index;
}

const ProductList = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const handleTabChange = (e: React.ChangeEvent<unknown>, tabIndex: number) => {
    e.preventDefault();
    setCurrentTabIndex(tabIndex);
  };
  const { data, error, isLoading } = useGetItemsQuery(19645);
  const itemList = useMemo(() => {
    return data && data.products;
  }, [data]);

  if (isLoading) return <Loader />;
  if (error) return <Error error={error} />;
  if (data) {
    const categoryList = data.products.map((item) => item.brandName);
    const category = categoryList.filter(onlyUnique);
    const itemListFiltered = itemList?.filter(
      (item) => item.brandName === category[currentTabIndex]
    );
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          minHeight: "300px",
          padding: "12px 0",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1440px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: { xs: "0px 8px", md: "0px 0" },
          }}
        >
          <Typography variant="h2">
            {category[currentTabIndex]
              .replace(/([A-Z]+)/g, " $1")
              .replace(/([A-Z][a-z])/g, " $1")
              .toUpperCase()}
          </Typography>
          <Box>
            <Tabs value={currentTabIndex} onChange={handleTabChange}>
              {category.map((item) => {
                const result = item
                  .replace(/([A-Z]+)/g, " $1")
                  .replace(/([A-Z][a-z])/g, " $1")
                  .toUpperCase();
                return <Tab label={result} key={item} />;
              })}
            </Tabs>
          </Box>
          <Grid
            container
            spacing={2}
            sx={{
              padding: "16px 0",
            }}
          >
            {itemListFiltered?.map((item) => {
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

export default ProductList;
