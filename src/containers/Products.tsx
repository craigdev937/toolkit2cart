import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../global/Hooks";
import { fetchAll } from "../global/ProdSlice";

export const Products = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { loading, error, products } = 
    useAppSelector((state) => state.products);

    React.useEffect(() => {
        dispatch(fetchAll());
    }, [dispatch]);

    return (
        <React.Fragment>
            {error ? (
                <h1>Error ...</h1>
            ) : loading ? (
                <h1>Loading...</h1>
            ) : (
                <aside>
                    {products.map((product) => (
                        <main key={product.id}>
                            <h3>{product.title}</h3>
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                style={{height: "200px", 
                                    width: "auto"}}
                            />
                        </main>
                    ))}
                </aside>
            )}
        </React.Fragment>
    );
};



