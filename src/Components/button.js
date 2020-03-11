import React from 'react';
import "./button.css";


const STYLES =[
    "btn--twitch",
    "btn--youtube"
]

const SYZES = ["btn--medio", "btn--grande"];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
}
) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
? buttonStyle 
: STYLES[0];

const checkButtonSize = SYZES.includes(buttonSize) 
? buttonSize
: SYZES[0];

    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} `} onClick={onClick} type={type} > {children} </button>
    )

}