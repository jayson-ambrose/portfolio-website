import React from "react";
import { Grid, GridRow, GridColumn, Button } from "semantic-ui-react";

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
                    <Button onClick={() => handleButtonClicked('7')}>7</Button>
                    <Button onClick={() => handleButtonClicked('4')}>4</Button>
                    <Button onClick={() => handleButtonClicked('1')}>1</Button>
                    <Button onClick={() => handleButtonClicked('0')}>0</Button>
                </GridColumn>
                <GridColumn width={1}>
                    <Button onClick={() => handleButtonClicked('8')}>8</Button>
                    <Button onClick={() => handleButtonClicked('5')}>5</Button>
                    <Button onClick={() => handleButtonClicked('2')}>2</Button>
                </GridColumn>
                <GridColumn width={1}>
                    <Button onClick={() => handleButtonClicked('9')}>9</Button>
                    <Button onClick={() => handleButtonClicked('6')}>6</Button>
                    <Button onClick={() => handleButtonClicked('3')}>3</Button>
                    <Button onClick={() => handleButtonClicked('bk')}>&#10229;</Button>
                </GridColumn>
                <GridColumn width={1}>
                    <Button onClick={() => handleButtonClicked('/')}>&divide;</Button>
                    <Button onClick={() => handleButtonClicked('.')}>.</Button>
                    <Button onClick={() => handleButtonClicked('%')}>%</Button>
                    <Button onClick={() => handleButtonClicked('clr')}>C</Button>
                </GridColumn>
                <GridColumn width={1}>
                    <Button onClick={() => handleButtonClicked('+')}>+</Button>
                    <Button onClick={() => handleButtonClicked('-')}>-</Button>
                    <Button onClick={() => handleButtonClicked('*')}>x</Button>
                    <Button onClick={() => handleButtonClicked('=')}>=</Button>
                </GridColumn>
            </GridRow>
        </Grid>
    )
}