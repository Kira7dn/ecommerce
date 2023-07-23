import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export interface ItemsResponse {
  data: Array<Item>;
}
export interface ItemDetailResponse {
  data: Item;
}
export interface Item {
  id: string;
  attributes: ItemAtt;
}
export interface ItemAtt {
  name: string;
  shortDescription: string;
  longDescription: string;
  price: number;
  category: string;
  image: Image;
}
export interface Image {
  data: {
    attributes: {
      formats: {
        medium: {
          url: string;
        };
      };
    };
  };
}
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "ecommerce",
  tagTypes: ["Items", "ItemDetail"],
  endpoints: (builder) => ({
    getItems: builder.query<ItemsResponse, void>({
      query: () => "api/items/?populate=image",
      providesTags: ["Items"],
    }),
    getItemDetail: builder.query<ItemDetailResponse, string | undefined>({
      query: (itemId) => `api/items/${itemId}?populate=image`,
      providesTags: ["ItemDetail"],
    }),
  }),
});
export const { useGetItemsQuery, useGetItemDetailQuery } = api;
