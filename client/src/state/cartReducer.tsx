import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { ItemAtt } from "./api";

export interface InitialState {
  isCartOpen: boolean;
  cart: Array<CardItem>;
}
export interface CardItem {
  id: string;
  attributes: ItemAtt;
  count: number;
}
export interface ItemPayload {
  id: string;
}
export interface CardPayload {
  item: CardItem;
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
    addtoCart: (state, action: PayloadAction<CardPayload>) => {
      state.cart = [...state.cart, action.payload.item];
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increaseItem: (state, action: PayloadAction<ItemPayload>) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },
    decreaseitem: (state, action: PayloadAction<ItemPayload>) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 0) {
          item.count--;
        }
        return item;
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
