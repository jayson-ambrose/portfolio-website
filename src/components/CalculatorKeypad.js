import React from "react";
import { Grid, GridRow, GridColumn, Button } from "semantic-ui-react";
import CalculatorButton from "./CalculatorButton";

export default function CalculatorKeypad ({ 
    handleSetFirstNum,
    displayValue, 
    handleSetDisplayValue,
    handleClearDisplayValue,
    handleSetOperator,
    handleEquals}) {

    const handleButtonClicked = (btnVal) => {

        switch(btnVal) {
            case '+':
            case '-':
            case '*':
            case '/':
            case '%':
                //set first num and operator in state using display state.
                handleSetFirstNum(btnVal)
                break
            case '.' :
                decimalSelected()
                break
            case 'bk' :
                backspaceSelected()
                break
            case 'clr' :                
                handleClearDisplayValue()
                break
            case '=' :
                handleEquals()
                //solve
                //if no secondNum entered, insert 0 and solve
                //if no operator senterred, insert + 0 and solve
                //if divide by 0 return ERROR
                break           
            default :
                //adds number to display value
                handleSetDisplayValue(btnVal)
        }
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

    const equalsSelected = () => {
        console.log('equals detected')
        //solve
        //if no secondNum entered, insert 0 and solve
        //if no operator senterred, insert + 0 and solve
        //if divide by 0 return ERROR
    }

    return (
        <Grid className="calculatorGrid">
            <GridRow>
                <GridColumn width={5}/>
                <GridColumn width={1}>
                    <CalculatorButton inverted={true} char={'7'} color={'blue'} handleClick={handleButtonClicked}/>
                    <CalculatorButton inverted={true} char={'4'} color={'blue'} handleClick={handleButtonClicked}/>
                    <CalculatorButton inverted={true} char={'1'} color={'blue'} handleClick={handleButtonClicked}/>
                </GridColumn>
                <GridColumn width={1}>
                    <CalculatorButton inverted={true} char={'8'} color={'blue'} handleClick={handleButtonClicked}/>
                    <CalculatorButton inverted={true} char={'5'} color={'blue'} handleClick={handleButtonClicked}/>
                    <CalculatorButton inverted={true} char={'2'} color={'blue'} handleClick={handleButtonClicked}/>
                    <CalculatorButton inverted={true} char={'0'} color={'blue'} handleClick={handleButtonClicked}/>
                </GridColumn>
                <GridColumn width={1}>
                    <CalculatorButton inverted={true} char={'9'} color={'blue'} handleClick={handleButtonClicked}/>
                    <CalculatorButton inverted={true} char={'6'} color={'blue'} handleClick={handleButtonClicked}/>
                    <CalculatorButton inverted={true} char={'3'} color={'blue'} handleClick={handleButtonClicked}/>
                    <CalculatorButton inverted={true} char={'.'} color={'blue'} handleClick={handleButtonClicked}/>
                </GridColumn>
                <GridColumn width={1}>
                    <CalculatorButton char={'%'} color={'blue'} handleClick={handleButtonClicked}/>
                    <CalculatorButton specialChar={'C'} char={'clr'} color={'red'} handleClick={handleButtonClicked}/>
                    <CalculatorButton specialChar={'\u27f5'} char={'bk'} color={'red'} handleClick={handleButtonClicked}/>
                    <CalculatorButton char={'='} color={'green'} handleClick={handleButtonClicked}/>
                </GridColumn>
                <GridColumn width={1}>
                    <CalculatorButton char={'+'} color={'blue'} handleClick={handleButtonClicked}/>
                    <CalculatorButton char={'-'} color={'blue'} handleClick={handleButtonClicked}/>
                    <CalculatorButton specialChar={'\u00d7'} char={'*'} color={'blue'} handleClick={handleButtonClicked}/>
                    <CalculatorButton specialChar={'\u00F7'}char={'/'} color={'blue'} handleClick={handleButtonClicked}/>

                </GridColumn>
            </GridRow>
        </Grid>
    )
}