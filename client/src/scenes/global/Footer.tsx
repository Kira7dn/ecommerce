import { Box, Typography } from "@mui/material";
import { tokens } from "@/theme";

const Footer = () => {
  return (
    <Box
      mt="70px"
      p="20px 0"
      sx={{
        backgroundColor: tokens.surfaceVariant,
      }}
    >
      <Box
        maxWidth={1440}
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        sx={{
          flexDirection: { xs: "column", md: "row" },
          padding: { xs: "0px 8px", md: "0px 0" },
        }}
      >
        <Box width={{ sx: "100%", md: "50%" }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            mb={{ sx: "18px", md: "30px" }}
            color={tokens.secondary[50]}
          >
            FACOME
          </Typography>
          <Typography variant="h4">
            Cung cấp những sản phẩm thời trang nữ đẳng cấp, hiện đại và sành
            điệu. Khám phá ngay và tạo phong cách riêng của bạn!
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={{ sx: "18px", md: "30px" }}
          >
            About Us
          </Typography>
          <Typography mb={{ sx: "18px", md: "30px" }}>Careers</Typography>
          <Typography mb={{ sx: "18px", md: "30px" }}>Our Stores</Typography>
          <Typography mb={{ sx: "18px", md: "30px" }}>
            Term & Conditions
          </Typography>
          <Typography mb={{ sx: "18px", md: "30px" }}>
            Privacy Policy
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={{ sx: "18px", md: "30px" }}
          >
            Customer Care
          </Typography>
          <Typography mb={{ sx: "18px", md: "30px" }}>Help Center</Typography>
          <Typography mb={{ sx: "18px", md: "30px" }}>
            Track Your Order
          </Typography>
          <Typography mb={{ sx: "18px", md: "30px" }}>
            Corporate & Bulk Purchasing
          </Typography>
          <Typography mb={{ sx: "18px", md: "30px" }}>
            Return & Refunds
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={{ sx: "18px", md: "30px" }}
          >
            Contact Us
          </Typography>
          <Typography mb={{ sx: "18px", md: "30px" }}>
            2464 Royal Ln. Mesa, New Jersey 45463
          </Typography>
          <Typography mb={{ sx: "18px", md: "30px" }}>
            tanya.hill@example.com
          </Typography>
          <Typography mb={{ sx: "18px", md: "30px" }}>
            (603) 555-0123
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
