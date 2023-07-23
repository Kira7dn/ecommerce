import { Box } from "@mui/material";
import HeroSection from "./HeroSection";
import Category from "./Category";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <Box className="home">
      <HeroSection />
      <Category />
      <ProductList />
    </Box>
  );
};

export default Home;
