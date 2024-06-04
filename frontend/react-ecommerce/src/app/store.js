import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import authReducer from "../features/auth/authSlice";

// import authReducer form '../'

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
  },
});
