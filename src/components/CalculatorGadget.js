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

    const addNums = () => firstNum + secondNum
    const subtractNums = () => firstNum - secondNum
    const multiplyNums = () => firstNum * secondNum
    const divideNums = () => firstNum / secondNum
    const percentNums = (val) => {
        return firstNum * (val/100)
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
        setFirstNum(() => Number(displayValue))
        setOperator(val)
        setDisplayValue('')
    }

    const handleSetOperator = (val) => {
        setOperator(val)
        setDisplayValue(displayValue + operator)
    }

    const handleCalculate = () => {
        if (operator === '+') {
            return(firstNum + secondNum)
        } else if (operator === '-') {
            return(firstNum - secondNum)
        } else if (operator === '*') {
            return(firstNum * secondNum)
        } else if (operator === '/') {
            return(firstNum / secondNum)
        } else if (operator === '%') {
            return(percentNums())
        }
    }

    const handleEquals = () => {
        const newSecondNum = Number(displayValue)
        setSecondNum(newSecondNum)
        setDisplayValue((displayValue) => {
            if (operator === '+') {
                return(firstNum + newSecondNum)
            } else if (operator === '-') {
                return(firstNum - newSecondNum)
            } else if (operator === '*') {
                return(firstNum * newSecondNum)
            } else if (operator === '/') {
                return(firstNum / newSecondNum)
            } else if (operator === '%') {
                return(percentNums(newSecondNum))
            }
        })
    }

    console.log('displayValue: ' + displayValue)
    console.log('operator state: ' + operator)
    console.log('first: ' + firstNum)
    console.log('second: ' + secondNum)

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
                handleEquals={handleEquals}
                displayValue={displayValue}/>
        </div>
    )
}
