import styled from "styled-components";

export type ButtonType = "primary" | "secondary";
interface BProps {
    buttonType: ButtonType
};

export const StyledButton = styled.button<BProps>`
    padding: 8px;
    background-color: ${(props) => 
        props.buttonType === "primary" ? 
        "var(--yellow)" : 
        "#fff"
    };

    border-radius: 4px;
    border-style: solid;
    border-color: ${(props) => 
        props.buttonType === "primary" ? 
        "transparent" : 
        "var(--yellow)"
    };

    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    color: ${(props) => 
        props.buttonType === "primary" ? 
        "var(--gray)" : 
        "var(--yellow)"
    };
`;


