import React from "react";
import "./Button.css";

const Button = (props)=>{
    return(
    
    <button className="button">
        {props.value}
    </button>);
}

export default Button;