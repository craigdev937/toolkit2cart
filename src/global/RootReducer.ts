import { configureStore } from "@reduxjs/toolkit";
import { ProdReducer } from "./ProdSlice";
import { CartReducer } from "./CartSlice";

export const RootReducer = configureStore({
    reducer: {
        products: ProdReducer,
        cart: CartReducer
    }
});

export type RootState = ReturnType<typeof RootReducer.getState>;
export type AppDispatch = typeof RootReducer.dispatch;



