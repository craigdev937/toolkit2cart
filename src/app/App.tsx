import React from "react";
import "./App.css";
import aaron from "../img/aaron.jpg";

export const App = (): JSX.Element => {
    return (
        <React.Fragment>
            <h1>App</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eaque incidunt doloribus nobis, deleniti hic doloremque aperiam culpa veritatis labore fugit sit porro nesciunt corrupti suscipit qui facere ipsam provident?</p>
            <img 
                src={aaron} 
                alt="Aaron Donald"
                style={{ width: "100%", height: "500px" }}  
            />
        </React.Fragment>
    );
};



