import React, { useState } from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorKeypad from "./CalculatorKeypad";

export default function CalculatorGadget() {

    const [displayValue, setDisplayValue] = useState('')

    const [firstNum, setFirstNum] = useState('')
    const [secondNum, setSecondNum] = useState('')
    const [operator, setOperator] = useState('')


    const percentNums = (val) => {
        return firstNum * (val/100)
    }

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

        if(firstNum) {
            setSecondNum(() => Number(displayValue))
            handleEquals()
        }

        setFirstNum(() => Number(displayValue))
        setOperator(val)
        setDisplayValue('')
    }

    const handleSetOperator = (val) => {
        setOperator(val)
        setDisplayValue(displayValue + operator)
    }


    const handleBackspace = (val) => {
        // setDisplayValue((displayValue) => {
        //     val.substring(0, val.length-1)
        // })
        console.log('backspace detected')
    }

    const handleEquals = () => {
        const newSecondNum = Number(displayValue)
        setSecondNum(newSecondNum)
        setDisplayValue((displayValue) => {
            if (operator === '+') {
                return(firstNum + newSecondNum).toString()
            } else if (operator === '-') {
                return(firstNum - newSecondNum).toString()
            } else if (operator === '*') {
                return(firstNum * newSecondNum).toString()
            } else if (operator === '/') {
                return(firstNum / newSecondNum).toString()
            } else if (operator === '%') {
                return(percentNums(newSecondNum).toString())
            }
        })
    }

    console.log('displayValue: ' + displayValue)

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
                handleBackspace={handleBackspace}
                displayValue={displayValue}/>
        </div>
    )
}
