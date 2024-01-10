import React from "react";

export default function CalculatorDisplay({ displayValue, firstNum, secondNum, operator }) {

    return(
        <div>
            <p>{firstNum} {operator} {secondNum} </p>
            <h1>{displayValue}</h1>
        </div>
    )
}