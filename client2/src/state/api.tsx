import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export interface ItemsResponse {
  products: Array<Item>;
}
export interface ItemDetailResponse {
  id: string;
  name: string;
  description: string;
  gender: string;
  media: {
    images: { 0: { url: string } };
  };
  price: {
    current: {
      text: string;
      value: number;
    };
  };
  brand: {
    brandId: number;
    name: string;
  };
}
export interface Item {
  id: string;
  name: string;
  price: {
    current: {
      text: string;
      value: number;
    };
  };
  brandName: string;
  imageUrl: string;
}

const headers = {
  "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
  "X-RapidAPI-Host": "asos2.p.rapidapi.com",
};
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "ecommerce",
  tagTypes: ["Items", "ItemDetail"],
  endpoints: (builder) => ({
    getItems: builder.query<ItemsResponse, number>({
      query: (searchParam) => ({
        url: "products/v2/list",
        method: "GET",
        params: {
          categoryId: searchParam,
          limit: "100",
          currency: "USD",
          attribute_10155: "6764",
          attribute_1047: "8400,8402,8416",
          lang: "en-US",
          brand: "13886,15128,16305,53",
        },
        headers: headers,
      }),
      providesTags: ["Items"],
    }),
    getItemDetail: builder.query<ItemDetailResponse, string | undefined>({
      query: (searchParam) => ({
        url: "products/v3/detail",
        method: "GET",
        params: {
          id: searchParam,
        },
        headers: headers,
      }),
      providesTags: ["ItemDetail"],
    }),
  }),
});
export const { useGetItemsQuery, useGetItemDetailQuery } = api;
