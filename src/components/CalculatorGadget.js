import React, { useState } from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorKeypad from "./CalculatorKeypad";

export default function CalculatorGadget() {

    const [displayValue, setDisplayValue] = useState('')

    const [firstNum, setFirstNum] = useState(0)
    const [secondNum, setSecondNum] = useState(0)
    const [operator, setOperator] = useState('')
    const [total, setTotal] = useState(0)

    //JavaScript Number() method for these

    const addNums = () => firstNum + secondNum
    const subtractNums = () => firstNum - secondNum
    const multiplyNums = () => firstNum * secondNum
    const divideNums = () => firstNum / secondNum
    const percentNums = () => {
        return firstNum * (secondNum/100)
    }

    ////////////////////////

    const handleClearDisplayValue = (val) => {
        setDisplayValue('')
        setFirstNum('')
        setSecondNum('')
        setOperator('')
    }

    const handleSetDisplayValue = (val) => {
        setDisplayValue(displayValue + val)
    }

    const handleSetFirstNum = (val) => {
        setFirstNum(Number(displayValue))
        setOperator(val)
        setDisplayValue('')
    }

    const handleSetOperator = (val) => {
        setOperator(val)
        setDisplayValue(displayValue + operator)
    }

    const handleCalculate = () => {

        setSecondNum(() => Number(displayValue))

        if (operator === '+') {
            setDisplayValue(() => firstNum + secondNum)
        } else if (operator === '-') {
            setDisplayValue(() => firstNum - secondNum)
        } else if (operator === '*') {
            setDisplayValue(() => firstNum * secondNum)
        } else if (operator === '/') {
            setDisplayValue(() => firstNum / secondNum)
        } else if (operator === '%') {
            setDisplayValue(percentNums())
        }
    }

    console.log('operator state: ' + operator)

    return(
        <div className='routeContent'>
            <h2 className='headLine'> Calculator </h2>
            <CalculatorDisplay 
                firstNum={firstNum}
                secondNum={secondNum}
                operator={operator}
                displayValue={displayValue}/>
            <CalculatorKeypad
                handleSetDisplayValue={handleSetDisplayValue} 
                handleSetFirstNum={handleSetFirstNum}
                handleClearDisplayValue={handleClearDisplayValue}
                handleSetOperator={handleSetOperator}
                handleCalculate={handleCalculate}
                displayValue={displayValue}/>
        </div>
    )
}
