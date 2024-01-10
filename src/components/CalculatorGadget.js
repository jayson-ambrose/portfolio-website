import React, { useState } from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorKeypad from "./CalculatorKeypad";

export default function CalculatorGadget() {

    const [displayValue, setDisplayValue] = useState('')

    const [firstNum, setFirstNum] = useState('')
    const [secondNum, setSecondNum] = useState('')
    const [operator, setOperator] = useState('')
    const [total, setTotal] = useState(0)

    //JavaScript Number() method for these

    const addNums = () => setTotal(firstNum + secondNum)
    const subtractNums = () => setTotal(firstNum - secondNum)
    const multiplyNums = () => setTotal(firstNum * secondNum)
    const divideNums = () => setTotal(firstNum / secondNum)
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
        setFirstNum(displayValue)
        setOperator(val)
        setDisplayValue('')
    }

    const handleSetSecondNum = (val) => {
        setSecondNum(val)
    }

    const handleSetOperator = (val) => {
        setOperator(val)
        setDisplayValue(displayValue + operator)
    }

    const handleCalculate = () => {

        if (operator === '+') {
            addNums()
        } else if (operator === '-') {
            subtractNums()
        } else if (operator === '*') {
            multiplyNums()
        } else if (operator === '/') {
            divideNums()
        } else if (operator === '%') {
            percentNums()
        }

        handleSetDisplayValue()
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
                handleSetSecondNum={handleSetSecondNum}
                handleClearDisplayValue={handleClearDisplayValue}
                handleSetOperator={handleSetOperator}
                handleCalculate={handleCalculate}
                displayValue={displayValue}/>
        </div>
    )
}
