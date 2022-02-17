import { createSlice, createAsyncThunk, 
    PayloadAction } from "@reduxjs/toolkit";
import { PState, IProduct } from "../types/Interfaces";

const URL = "https://fakestoreapi.com/products";
export const fetchAll = createAsyncThunk("products/fetchAll", 
async () => {
    const res: Response = await fetch(URL);
    if (!res.ok) throw new Error("Fetch has failed!");
    const products: IProduct[] = await res.json();
    return [...products];
});

const initialState: PState = {
    products: [],
    loading: false,
    error: null
};

const ProdSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [fetchAll.rejected.toString()]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [fetchAll.pending.toString()]: (state) => {
            state.loading = true
        },
        [fetchAll.fulfilled.type]: 
        (state, action: PayloadAction<IProduct[]>) => {
            state.loading = false,
            state.products = [...action.payload]
        },
    }
});

export const ProdReducer = ProdSlice.reducer;




