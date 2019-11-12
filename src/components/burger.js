import React, { Components } from "react";
import "./burger.css"

const Burger = props =>
(
    <button className="hamburger" {...props}>
        <div className="burger-line" />
        <div className="burger-line" />
        <div className="burger-line" />
    </button>
);

export default Burger;