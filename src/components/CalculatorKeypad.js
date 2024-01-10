import React from "react";
import { Grid, GridRow, GridColumn, Button } from "semantic-ui-react";
import CalculatorButton from "./CalculatorButton";

export default function CalculatorKeypad ({ handleSetFirstNum, handleSetSecondNum, displayValue }) {

    const handleButtonClicked = (btnVal) => {

        switch(btnVal) {
            case '+':
            case '-':
            case '*':
            case '/':
            case '%':
                operatorSelected(btnVal)
                break
            case '.' :
                decimalSelected()
                break
            case 'bk' :
                backspaceSelected()
                break
            case 'clr' : 
                clearSelected()
                break
            case '=' :
                equalsSelected()
                break           
            default :
                numberSelected(btnVal)
        }
    }

    const operatorSelected = (btnVal) => {
        console.log(`operator ${btnVal} detected`)
        //set first num and operator in state using display state.
    }

    const decimalSelected = () => {
        console.log('decimal point detected')
        //check if decimal present using display val then add one if not.
    }

    const backspaceSelected = () => {
        console.log('backspace detected')
        //pop the last number or decimal from the display value.
        //if empty and on secondNum, remove operator and switch display back to firstNum
    }

    const clearSelected = () => {
        console.log('clear detected')
        //clear and reset the calculator
    }

    const equalsSelected = () => {
        console.log('equals detected')
        //solve
        //if no secondNum entered, insert 0 and solve
        //if no operator senterred, insert + 0 and solve
        //if divide by 0 return ERROR
    }

    const numberSelected = (btnVal) => {
        console.log(`number ${btnVal} detected`)
        //add a number to the end of the firstNum or secondNum string.
    }

    return (
        <Grid className="calculatorGrid">
            <GridRow>
                <GridColumn width={5}/>
                <GridColumn width={1}>
                    <CalculatorButton char={'7'} color={'blue'} handleClick={handleButtonClicked}/>
                    <CalculatorButton char={'4'} color={'blue'} handleClick={handleButtonClicked}/>
                    <CalculatorButton char={'1'} color={'blue'} handleClick={handleButtonClicked}/>
                    <CalculatorButton char={'0'} color={'blue'} handleClick={handleButtonClicked}/>
                </GridColumn>
                <GridColumn width={1}>
                    <CalculatorButton char={'8'} color={'blue'} handleClick={handleButtonClicked}/>
                    <CalculatorButton char={'5'} color={'blue'} handleClick={handleButtonClicked}/>
                    <CalculatorButton char={'2'} color={'blue'} handleClick={handleButtonClicked}/>
                </GridColumn>
                <GridColumn width={1}>
                    <CalculatorButton char={'9'} color={'blue'} handleClick={handleButtonClicked}/>
                    <CalculatorButton char={'6'} color={'blue'} handleClick={handleButtonClicked}/>
                    <CalculatorButton char={'3'} color={'blue'} handleClick={handleButtonClicked}/>
                    <CalculatorButton char={'bk'} color={'blue'} handleClick={handleButtonClicked}/>
                </GridColumn>
                <GridColumn width={1}>
                    <CalculatorButton char={'/'} color={'blue'} handleClick={handleButtonClicked}/>
                    <CalculatorButton char={'.'} color={'blue'} handleClick={handleButtonClicked}/>
                    <CalculatorButton char={'%'} color={'blue'} handleClick={handleButtonClicked}/>
                    <CalculatorButton char={'C'} color={'blue'} handleClick={handleButtonClicked}/>
                </GridColumn>
                <GridColumn width={1}>
                    <CalculatorButton char={'+'} color={'blue'} handleClick={handleButtonClicked}/>
                    <CalculatorButton char={'-'} color={'blue'} handleClick={handleButtonClicked}/>
                    <CalculatorButton char={'*'} color={'blue'} handleClick={handleButtonClicked}/>
                    <CalculatorButton char={'='} color={'blue'} handleClick={handleButtonClicked}/>
                </GridColumn>
            </GridRow>
        </Grid>
    )
}