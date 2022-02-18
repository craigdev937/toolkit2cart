import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../global/Hooks";
import { Container, TitleContainer } from "./CartStyle";
import { clearCart } from "../global/CartSlice";
import { ProdContainer } from "./ProdStyle";
import { PCard } from "../common/PCard";

export const Cart = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.cart.products);
    const totalPrice = useAppSelector((state) => state.cart.totalPrice);

    return (
        <Container>
            <TitleContainer>
                <h1>Cart</h1>
                <Link to="/">Products</Link>
            </TitleContainer>
            <ProdContainer>
                {products.map((product) => (
                    <main key={product.id}>
                        <PCard key={product.id} product={product} />
                    </main>
                ))}
                <h4>Total: $ {totalPrice}</h4>
                <aside className="actionButtons">
                    <button onClick={() => undefined}>Final</button>
                    <button onClick={() => dispatch(clearCart())}
                        >Clear Cart
                    </button>
                </aside>
            </ProdContainer>
        </Container>
    );
};



