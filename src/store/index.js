import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/productslice";

const store = configureStore({
    reducer: {
        products: productSlice.reducer,
    },
});

export default store;
