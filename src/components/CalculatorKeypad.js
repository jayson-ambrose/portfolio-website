import React from "react";
import { Grid, GridRow, GridColumn, Button } from "semantic-ui-react";

export default function CalculatorKeypad () {

    return (
        <Grid className="calculatorGrid">
            <GridRow>
                <GridColumn width={5}/>
                <GridColumn width={1}>
                    <Button>7</Button>
                    <Button>4</Button>
                    <Button>1</Button>
                    <Button>0</Button>
                </GridColumn>
                <GridColumn width={1}>
                    <Button>8</Button>
                    <Button>5</Button>
                    <Button>2</Button>
                    <Button>-x</Button>
                </GridColumn>
                <GridColumn width={1}>
                    <Button>9</Button>
                    <Button>6</Button>
                    <Button>3</Button>
                    <Button>x &sup2;</Button>
                </GridColumn>
                <GridColumn width={1}>
                    <Button>=</Button>
                    <Button>.</Button>
                    <Button>%</Button>
                    <Button>ENTER</Button>
                </GridColumn>
                <GridColumn width={1}>
                    <Button>+</Button>
                    <Button>-</Button>
                    <Button>x</Button>
                    <Button>&divide;</Button>
                </GridColumn>
            </GridRow>
        </Grid>
    )
}