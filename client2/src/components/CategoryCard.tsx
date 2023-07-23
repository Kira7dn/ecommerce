import { Box, Typography } from "@mui/material";

type Props = {
  image?: string;
  title1?: string;
  title2?: JSX.Element | string;
  btnTitle?: string;
  col?: number;
  color?: string;
};

const CategoryCard = (props: Props): JSX.Element => {
  const { image, title1, title2, color } = props;
  return (
    <Box
      sx={{
        width: "100%",
        height: "300px",
        display: "flex",
        borderRadius: "20px",
        padding: "12px",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: color,
      }}
    >
      <Box>
        <Typography variant="h2" color="black">
          {title1}
        </Typography>
        {title2}
        {/* <Button
          variant="contained"
          color="info"
          sx={{
            margin: "8px 0",
          }}
        >
          {btnTitle}
        </Button> */}
      </Box>
      <Box sx={{ height: "100%" }}>
        <img
          src={image}
          alt={title1}
          style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
        />
      </Box>
    </Box>
  );
};

export default CategoryCard;
