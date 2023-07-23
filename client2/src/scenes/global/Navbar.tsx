import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  IconButton,
  Badge,
  Tabs,
  Tab,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
  AccountCircleOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import type { RootState } from "@/state/store";
import { setIsCartOpen } from "@/state/cartReducer";
import { tokens } from "../../theme";
import { useState } from "react";

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      sx={{
        minWidth: "40px",
        maxWidth: "200px",
        fontSize: "16px",
        lineHeight: "24px",
        padding: "14px",
        textTransform: "capitalize",
        fontWeight: 500,
        color: tokens.grey[70],
      }}
      {...props}
    />
  );
}
const Navbar = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  function handleTabChange(event: React.SyntheticEvent, tabIndex: number) {
    event.preventDefault();
    setCurrentTabIndex(tabIndex);
  }
  return (
    <Box
      sx={{
        display: "flex",
        position: "fixed",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "auto",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        color: "black",
        zIndex: "1",
        padding: "14px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "1440px",
        }}
      >
        <Box
          onClick={() => navigate("/")}
          sx={{
            "&:hover": { cursor: "pointer" },
          }}
          color={tokens.primary[50]}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: "32px", lineHeight: "40px" }}
          >
            FACOME
          </Typography>
        </Box>
        <Box sx={{ borderBottom: 0 }} display={isSmall ? "none" : "block"}>
          <Tabs
            value={currentTabIndex}
            onChange={handleTabChange}
            TabIndicatorProps={{
              children: <span className="MuiTabs-indicatorSpan" />,
            }}
            sx={{
              "& .MuiTabs-indicator": {
                display: "flex",
                justifyContent: "center",
                backgroundColor: "transparent",
              },
              "& .MuiTabs-indicatorSpan": {
                maxWidth: 40,
                width: "100%",
                backgroundColor: tokens.primary[50],
              },
            }}
          >
            <LinkTab label="Home" href="/" />
            <LinkTab label="Category" href="/category" />
            <LinkTab label="Collection" href="/collection" />
            <LinkTab label="Favorite" href="/favorite" />
          </Tabs>
        </Box>

        <Box
          display={isSmall ? "none" : "flex"}
          justifyContent="space-between"
          columnGap="40px"
          zIndex={2}
        >
          <Box display="flex" justifyContent="space-between" columnGap="8px">
            <IconButton sx={{ color: tokens.grey[70] }} disabled>
              <SearchOutlined sx={{ width: "24px", height: "24px" }} />
            </IconButton>
            <IconButton sx={{ color: tokens.grey[70] }} disabled>
              <AccountCircleOutlined sx={{ width: "24px", height: "24px" }} />
            </IconButton>
            <IconButton sx={{ color: tokens.grey[70] }} disabled>
              <FavoriteBorderOutlined sx={{ width: "24px", height: "24px" }} />
            </IconButton>
            <Badge
              badgeContent={cart.length}
              color="primary"
              invisible={cart.length === 0}
              sx={{
                "& .MuiBadge-badge": {
                  right: 10,
                  top: 10,
                  height: "16px",
                  width: "16px",
                  minWidth: "13px",
                  lineHeight: "16px",
                  fontSize: "10px",
                },
              }}
            >
              <IconButton
                sx={{ color: tokens.grey[70] }}
                onClick={() => {
                  dispatch(setIsCartOpen());
                }}
              >
                <ShoppingCartOutlined sx={{ width: "24px", height: "24px" }} />
              </IconButton>
            </Badge>
          </Box>
          <IconButton sx={{ color: tokens.grey[70] }} disabled>
            <MenuOutlined sx={{ width: "24px", height: "24px" }} />
          </IconButton>
        </Box>
        <Box
          display={isSmall ? "flex" : "none"}
          justifyContent="space-between"
          columnGap="40px"
          zIndex={2}
        >
          <Badge
            badgeContent={cart.length}
            color="primary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 10,
                top: 10,
                height: "16px",
                width: "16px",
                minWidth: "13px",
                lineHeight: "16px",
                fontSize: "10px",
              },
            }}
          >
            <IconButton
              sx={{ color: tokens.grey[70] }}
              onClick={() => {
                dispatch(setIsCartOpen());
              }}
            >
              <ShoppingCartOutlined sx={{ width: "24px", height: "24px" }} />
            </IconButton>
          </Badge>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
