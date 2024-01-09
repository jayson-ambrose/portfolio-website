import React from "react";
import { Grid, GridRow, GridColumn, Button } from "semantic-ui-react";

export default function CalculatorKeypad ({ handleSetFirstNum, handleSetSecondNum }) {

    const handleButtonClicked = (btnVal) => {

        switch(btnVal) {
            case '+':
            case '-':
            case '*':
            case '/':
                console.log(`operator ${btnVal} detected`)
                break
            case '.' :
                console.log('decimal point detected')
                break
            default :
                console.log(btnVal)
        }
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