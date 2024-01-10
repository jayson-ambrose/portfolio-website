import React from "react";
import { Button } from 'semantic-ui-react'

export default function CalculatorButton ({ char, color='blue', styleClass, handleClick }) {

    const tacos = true
    
    return (
        <Button          
            color={color} 
            className={styleClass}
            onClick={() => handleClick(char)}>{char}</Button>
    )
}