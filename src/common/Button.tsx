import React from "react";
import { StyledButton, ButtonType } from "./ButtonStyles";

type TProps = {
    onClick: () => void,
    title: string,
    type?: ButtonType
};

export const Button = 
({ onClick, title, type }: TProps): JSX.Element => {
    return (
        <React.Fragment>
            <StyledButton 
                buttonType={type || "primary"} 
                onClick={onClick}
            >{title}
            </StyledButton>
        </React.Fragment>
    );
};



