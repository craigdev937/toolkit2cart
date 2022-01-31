import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "../styles/global";
import { Cart } from "../containers/Cart";
import { Products } from "../containers/Products";

export const Main = (): JSX.Element => (
    <BrowserRouter>
        <React.Fragment>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </React.Fragment>
    </BrowserRouter>
);




