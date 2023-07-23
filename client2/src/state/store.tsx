import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import { api } from "./api";
import { setupListeners } from "@reduxjs/toolkit/dist/query/index";

export const store = configureStore({
  reducer: { cart: cartReducer, [api.reducerPath]: api.reducer },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
