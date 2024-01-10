import React from "react";
import { Button } from 'semantic-ui-react'

export default function CalculatorButton ({ 
    char, 
    inverted=false,
    color='blue', 
    styleClass, 
    handleClick, 
    specialChar=null}) {

    const tacos = true
    
    return (
        <Button
            inverted={inverted}          
            color={color} 
            className={styleClass}
            onClick={() => handleClick(char)}>{specialChar ? specialChar : char}</Button>
    )
}