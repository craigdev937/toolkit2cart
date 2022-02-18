import React from "react";
import { Button } from "./Button";
import { useAppSelector, useAppDispatch } from "../global/Hooks";
import { IProduct, ICart } from "../types/Interfaces";
import { addToCart, removeFromCart } from "../global/CartSlice";
import { PCardContainer } from "./PCardStyles";
import { Quantity } from "./Quantity";

interface Props {
    product: ICart
};

export const PCard = 
({product}: Props): JSX.Element => {
    const dispatch = useAppDispatch();
    const { products } = useAppSelector((state) => state.cart)
    const [quantity, setQuantity] = React.useState(0);

    React.useEffect(() => {
        const getProductQuantity = (productId: number): number => {
            const selectedProduct = products.find(
                (cartProduct) => cartProduct.id === productId);
            if (selectedProduct) {
                return selectedProduct.quantity;
            };
            return 0;
        };
        setQuantity(getProductQuantity(product.id));
    }, [product, products]);

    const handleAdd = (product: ICart) => {
        dispatch(addToCart(product));
    };

    const handleSub = (productId: number) => {
        dispatch(removeFromCart(productId));
    };

    return (
        <PCardContainer>
            <h3>{product.title}</h3>
            <h3>Price {product.price}</h3>
            {quantity ? (
                <Quantity 
                    onPlusClick={() => handleAdd(product)}
                    onMinusClick={() => handleSub(product.id)}
                    quantity={quantity}
                />
            ) : (
                <Button 
                    onClick={() => handleAdd(product)}
                    title="Add to Cart"
                />
            )}
        </PCardContainer>
    );
};




