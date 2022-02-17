import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart, CState } from "../types/Interfaces";

const initialState: CState = {
    products: [],
    totalPrice: 0
};

const CartSlice = createSlice({
    name: "cart",
    initialState: initialState,
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
        removeFromCart: (state, action: PayloadAction<string>) => {
            const selectedProductId = action.payload;
            const productIndex = state.products.findIndex(
                (product) => product.id === selectedProductId);
            state.totalPrice = (
                state.totalPrice * 100 
                - state.products[productIndex].price * 100) 
                / 100;
            if (state.products[productIndex].quantity > 1) {
                state.products[productIndex].quantity--;
            } else {
                state.products.splice(productIndex, 1);
            }
        },
        clearCart: (state) => {
            state.products = [],
            state.totalPrice = 0
        },
    }
});

export const CartReducer = CartSlice.reducer;


