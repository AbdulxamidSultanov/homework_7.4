import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: null,
  cartList: [],
  isLoading: false,
  catchError: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, actions) => {
      state.products = actions.payload;
    },
    addCart: (state, actions) => {
      state.cartList = [...state.cartList, actions.payload];
    },
    setCart: (state, actions) => {
      state.cartList = actions.payload;
    },
    deleteCart: (state, actions) => {
      state.cartList = state.cartList.filter((c) => {
        return c.id != actions.payload;
      });
    },
    setLoading: (state, actions) => {
      state.isLoading = actions.payload;
    },
    setError: (state, actions) => {
      state.catchError = actions.payload;
    },
  },
});

export const {
  addCart,
  deleteCart,
  setLoading,
  setError,
  addProducts,
  setCart,
} = productsSlice.actions;
export default productsSlice.reducer;
