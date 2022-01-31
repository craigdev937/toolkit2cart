import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart, CState } from "../types/Interfaces";

const initialState: CState = {
    products: [],
    totalPrice: 0
};

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ICart>) => {
            const selectedProduct = action.payload;
            const prodIndex = state.products.findIndex(
                (product) => product.id === selectedProduct.id);
            if (prodIndex > -1) {
                state.products[prodIndex].quantity++;
            } else {
                state.products.push({...selectedProduct, quantity: 1});
            };
            state.totalPrice += Math.round(
                selectedProduct.price * 100) / 100;
        },
        clearCart: (state) => {
            state.products = [],
            state.totalPrice = 0
        },
    }
});

export const CartReducer = CartSlice.reducer;


