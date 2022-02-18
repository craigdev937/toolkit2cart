import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../global/Hooks";
import { fetchAll } from "../global/ProdSlice";
import { ProdContainer, Header } from "./ProdStyle";
import { PCard } from "../common/PCard";

export const Products = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { error, loading, products } = 
    useAppSelector((state) => state.products);

    const cart = useAppSelector((state) => state.cart);

    React.useEffect(() => {
        dispatch(fetchAll());
    }, [dispatch]);

    return (
        <React.Fragment>
            <Header>
                <Link to="/cart">Cart</Link>
                <span>{cart.products.length} items</span>
            </Header>
            {error ? (
                <h1>Error ...</h1>
            ) : loading ? (
                <h1>Loading...</h1>
            ) : (
                <ProdContainer>
                    {products.map((product) => (
                        <main key={product.id}>
                            <PCard key={product.id} product={product} />
                            {/* <h3>{product.title}</h3>
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                style={{height: "200px", 
                                    width: "auto"}}
                            /> */}
                        </main>
                    ))}
                </ProdContainer>
            )}
        </React.Fragment>
    );
};



