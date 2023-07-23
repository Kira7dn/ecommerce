import CategoryCard from "@/components/CategoryCard";
import { Box, Grid, Typography } from "@mui/material";
import { tokens } from "@/theme";
import image1 from "@/assets/andreea-chidu-FPV2_FbNHoE-unsplash 1.png";
import image2 from "@/assets/faith-yarn-jX2cntCbrAo-unsplash 1.png";
import image3 from "@/assets/Frame 11.png";
import image4 from "@/assets/Frame 2.png";
import image5 from "@/assets/suhendro-purnomo-f0oLkvrnVOo-unsplash 1.png";
import image6 from "@/assets/66c66f92806405 1.png";

const Category = (): JSX.Element => {
  const categories = [
    {
      image: image1,
      title1: "Enjoy with",
      title2: (
        <Typography variant="h2" sx={{ fontWeight: 700 }} color="white">
          YOUNG
        </Typography>
      ),
      btnTitle: "Fit Style",
      col: 3,
      color: tokens.primary[40],
    },
    {
      image: image2,
      title1: "Join with",
      title2: (
        <Typography variant="h2" sx={{ fontWeight: 700 }} color="white">
          CLASSIC
        </Typography>
      ),
      btnTitle: "Fit Style",
      col: 3,
      color: tokens.secondary[50],
    },
    {
      image: image3,
      title1: "Sizzling with",
      title2: (
        <Typography variant="h2" sx={{ fontWeight: 700 }} color="white">
          SUMMER
        </Typography>
      ),
      btnTitle: "Fit Style",
      col: 6,
      color: tokens.tertiary[70],
    },
    {
      image: image4,
      title1: "Relaxed with",
      title2: (
        <Typography variant="h2" sx={{ fontWeight: 700 }} color="black">
          Casual
        </Typography>
      ),
      btnTitle: "Fit Style",
      col: 6,
      color: tokens.surfaceVariant,
    },
    {
      image: image5,
      title1: "Stylish",
      title2: (
        <Typography variant="h2" sx={{ fontWeight: 700 }} color="white">
          Staples
        </Typography>
      ),
      btnTitle: "Fit Style",
      col: 3,
      color: tokens.secondary[50],
    },
    {
      image: image6,
      title1: "Power your",
      title2: (
        <Typography variant="h2" sx={{ fontWeight: 700 }} color="white">
          Dress
        </Typography>
      ),
      btnTitle: "Fit Style",
      col: 3,
      color: tokens.primary[40],
    },
  ];
  return (
    <Box
      sx={{
        display: { xs: "flex", md: "flex" },
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          padding: { xs: "16px 8px", md: "16px 0" },
        }}
      >
        <Grid container spacing={2}>
          {categories.map((category, index) => {
            return (
              <Grid item key={index} xs={12} sm={6} md={4} lg={category.col}>
                <CategoryCard {...category} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Category;
