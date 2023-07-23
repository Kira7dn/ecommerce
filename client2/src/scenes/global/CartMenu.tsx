import {
  Box,
  Button,
  Divider,
  IconButton,
  Typography,
  Fade,
  Slide,
} from "@mui/material";
import { useAppSelector, useAppDispatch } from "@/state/hooks";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";
import { tokens } from "@/theme";
import {
  decreaseitem,
  increaseItem,
  removeFromCart,
  setIsCartOpen,
} from "@/state/cartReducer";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartMenu = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);
  const isCartOpen = useAppSelector((state) => state.cart.isCartOpen);
  const containerRef = useRef(null);
  const totalPrice = cart.reduce((total, cartItem) => {
    return total + cartItem.count * cartItem.item.price.current.value;
  }, 0);

  return (
    <Fade in={isCartOpen}>
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          position: "fixed",
          zIndex: 10,
          width: "100%",
          height: "100%",
          left: "0",
          top: "0",
          overflow: "auto",
        }}
      >
        <Slide
          direction="left"
          in={isCartOpen}
          container={containerRef.current}
        >
          <Box
            sx={{
              position: "fixed",
              right: "0",
              bottom: "0",
              width: { md: "max(400px, 30%)", xs: "100%" },
              height: "100%",
              backgroundColor: "white",
            }}
          >
            <Box
              padding={{ xs: "8px", md: "30px" }}
              overflow="auto"
              height="100%"
            >
              {/* HEADER */}
              <FlexBox mb="15px">
                <Typography variant="h3">
                  SHOPPING BAG ({cart.length})
                </Typography>
                <IconButton onClick={() => dispatch(setIsCartOpen())}>
                  <CloseIcon />
                </IconButton>
              </FlexBox>

              {/* CART LIST */}
              <Box>
                {cart.map((cartItem) => (
                  <Box key={`${cartItem.item.name}-${cartItem.item.id}`}>
                    <FlexBox p="15px 0">
                      <Box flex="1 1 40%">
                        <img
                          alt={cartItem?.item.name}
                          width="123px"
                          height="164px"
                          src={`https://${cartItem.item.imageUrl}`}
                        />
                      </Box>
                      <Box flex="1 1 60%">
                        <FlexBox mb="5px">
                          <Typography fontWeight="bold">
                            {cartItem.item.name}
                          </Typography>
                          <IconButton
                            onClick={() =>
                              dispatch(removeFromCart({ id: cartItem.item.id }))
                            }
                          >
                            <CloseIcon />
                          </IconButton>
                        </FlexBox>
                        <Typography>{cartItem.item.brandName}</Typography>
                        <FlexBox m="15px 0">
                          <Box
                            display="flex"
                            alignItems="center"
                            border={`1.5px solid ${tokens.neutral[50]}`}
                          >
                            <IconButton
                              onClick={() =>
                                dispatch(decreaseitem({ id: cartItem.item.id }))
                              }
                            >
                              <RemoveIcon />
                            </IconButton>
                            <Typography>{cartItem.count}</Typography>
                            <IconButton
                              onClick={() =>
                                dispatch(increaseItem({ id: cartItem.item.id }))
                              }
                            >
                              <AddIcon />
                            </IconButton>
                          </Box>
                          <Typography fontWeight="bold">
                            ${cartItem.item.price.current.value}
                          </Typography>
                        </FlexBox>
                      </Box>
                    </FlexBox>
                    <Divider />
                  </Box>
                ))}
              </Box>

              {/* ACTIONS */}
              <Box m="20px 0">
                <FlexBox m="20px 0">
                  <Typography fontWeight="bold">SUBTOTAL</Typography>
                  <Typography fontWeight="bold">${totalPrice}</Typography>
                </FlexBox>
                <Button
                  sx={{
                    backgroundColor: tokens.primary[40],
                    color: "white",
                    borderRadius: 0,
                    minWidth: "100%",
                    padding: "20px 40px",
                    m: "20px 0",
                  }}
                  onClick={() => {
                    navigate("/checkout");
                    dispatch(setIsCartOpen());
                  }}
                >
                  CHECKOUT
                </Button>
              </Box>
            </Box>
          </Box>
        </Slide>
      </Box>
    </Fade>
  );
};

export default CartMenu;
