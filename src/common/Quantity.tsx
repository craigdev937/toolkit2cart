import React from "react";
import { Button } from "../common/Button";
import { PQContainer } from "./QStyles";

type QProps = {
    quantity: number,
    onMinusClick: () => void,
    onPlusClick: () => void,
};

export const Quantity = 
({quantity, onMinusClick, onPlusClick}: QProps): JSX.Element => {

    return (
        <React.Fragment>
            <PQContainer>
                <Button onClick={onMinusClick} title="-" />
                    <input 
                        type="number" 
                        value={quantity} 
                        readOnly 
                    />
                <Button onClick={onPlusClick} title="+" />
            </PQContainer>
        </React.Fragment>
    );
};



