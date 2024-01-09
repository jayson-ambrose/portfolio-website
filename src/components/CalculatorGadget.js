import React, { useState } from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorKeypad from "./CalculatorKeypad";

export default function CalculatorGadget() {

    const [displayValue, setDisplayValue] = useState('')

    const [firstNum, setFirstNum] = useState('')
    const [secondNum, setSecondNum] = useState('')
    const [operator, setOperator] = useState('')
    const [total, setTotal] = useState(0)

    const addNums = () => setTotal(firstNum + secondNum)
    const subtractNums = () => setTotal(firstNum - secondNum)
    const multiplyNums = () => setTotal(firstNum * secondNum)
    const divideNums = () => setTotal(firstNum / secondNum)

    const handleSetDisplayValue = (val) => {
        setDisplayValue(val)
    }

    const handleSetFirstNum = (val) => {
        setFirstNum(val)
    }

    const handleSetSecondNum = (val) => {
        setSecondNum(val)
    }

    const handleSetOperator = (val) => {
        setOperator(val)
    }

    const handleCalculate = () => {

        if (operator === '+') {
            setTotal(() => addNums())
        } else if (operator === '-') {
            setTotal(() => subtractNums())
        } else if (operator === '*') {
            setTotal(() => multiplyNums())
        } else if (operator === '/') {
            setTotal(() => divideNums())
        }

        handleSetDisplayValue()
    }

    return(
        <div className='routeContent'>
            <h2 className='headLine'> Calculator </h2>
            <CalculatorDisplay displayValue={displayValue}/>
            <CalculatorKeypad 
                handleSetFirstNum={handleSetFirstNum}/>
        </div>
    )
}
