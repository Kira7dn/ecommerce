import { Box, Typography } from "@mui/material";
import image from "@/assets/Frame 20.png";
import { tokens } from "@/theme";

const HeroSection = (): JSX.Element => {
  return (
    <Box
      sx={{
        padding: "20px 0px",
        marginTop: "80px",
        backgroundColor: tokens.surfaceVariant,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          flexDirection: { xs: "column", md: "row" },
          display: "flex",
          alignItems: "center",
          columnGap: "145px",
          width: "100%",
          maxWidth: "1440px",
          padding: { xs: "0 8px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "32px",
          }}
        >
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: "48px",
              }}
            >
              DISCOVER YOUR
            </Typography>
            <Typography
              variant="h2"
              color="primary"
              sx={{
                fontWeight: 700,
                fontSize: "48px",
              }}
            >
              STYLE
            </Typography>
          </Box>
          <Typography variant="h3">
            Shop the Latest Trendsetting Fashion for Women - Unleash Your Unique
            Charm with Our Modern and Seductive Collection.
          </Typography>
        </Box>
        <Box sx={{ height: { xs: "200px", md: "500px" } }}>
          <img
            alt="Hero"
            src={image}
            style={{ maxHeight: "100%", objectFit: "contain" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
