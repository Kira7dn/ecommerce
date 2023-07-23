import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Item } from "./api";

export interface InitialState {
  isCartOpen: boolean;
  cart: Array<CartItem>;
}
export interface CartItem {
  item: Item;
  count: number;
}
export interface ItemPayload {
  id: string;
}
export interface CartPayload {
  cartItem: CartItem;
}
const initialState: InitialState = {
  isCartOpen: false,
  cart: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    addtoCart: (state, action: PayloadAction<CartPayload>) => {
      state.cart = [...state.cart, action.payload.cartItem];
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (cartItem) => cartItem.item.id !== action.payload.id
      );
    },
    increaseItem: (state, action: PayloadAction<ItemPayload>) => {
      state.cart = state.cart.map((cartItem) => {
        if (cartItem.item.id === action.payload.id) {
          cartItem.count++;
        }
        return cartItem;
      });
    },
    decreaseitem: (state, action: PayloadAction<ItemPayload>) => {
      state.cart = state.cart.map((cartItem) => {
        if (cartItem.item.id === action.payload.id && cartItem.count > 0) {
          cartItem.count--;
        }
        return cartItem;
      });
    },
  },
});
export const {
  setIsCartOpen,
  addtoCart,
  removeFromCart,
  increaseItem,
  decreaseitem,
} = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart.cart;
export default cartSlice.reducer;
