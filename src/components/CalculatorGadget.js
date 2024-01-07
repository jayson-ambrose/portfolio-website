import React, { useState } from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorKeypad from "./CalculatorKeypad";

export default function CalculatorGadget() {

    const [displayValue, setDisplayValue] = useState('')

    function calculateExpression () {
        let expressionArray = displayValue.split(" ")
        console.log(expressionArray)
    }

    return(
        <div className='routeContent'>
            <h2 className='headLine'> Calculator </h2>
            <CalculatorDisplay/>
            <CalculatorKeypad/>
        </div>
    )
}
