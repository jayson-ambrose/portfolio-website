import React, { useState } from "react";
import { Menu, GridColumn, GridRow, Grid } from 'semantic-ui-react'
import { Link, Route, Routes } from 'react-router-dom'
import CalculatorGadget from "./CalculatorGadget";
import TriviaGadget from "./TriviaGadget";
import BreweryGadget from "./BreweryGadget";
import ClockGadget from "./ClockGadget";

export default function GadgetNav() {

    const [menuSelection, setMenuSelection] = useState({})

    const handleItemClick = (e, { name }) => setMenuSelection({ activeItem: name })
    const { activeItem } = menuSelection

    return(
        <Grid>
            <GridRow>
                <GridColumn width={2}/>
                <GridColumn width={2}>
                    <Menu pointing vertical>
                        <Menu.Item
                            as={ Link }
                            to='/gadgets/calculator'
                            name='calculator'
                            active={activeItem === 'calculator'}
                            onClick={handleItemClick}
                        >
                            <b>Calculator</b>
                        </Menu.Item>
                        <Menu.Item
                            as={ Link }
                            to='/gadgets/trivia'
                            name='trivia'
                            active={activeItem === 'trivia'}
                            onClick={handleItemClick}
                        >
                            <b>Trivia Game</b>
                        </Menu.Item>
                        <Menu.Item
                            as={ Link }
                            to='/gadgets/brewery'
                            name='brewery'
                            active={activeItem === 'brewery'}
                            onClick={handleItemClick}
                        >
                            <b>Brewery Search</b>
                        </Menu.Item>
                        <Menu.Item
                            as={ Link }
                            to='/gadgets/clock'
                            name='clock'
                            active={activeItem === 'clock'}
                            onClick={handleItemClick}
                        >
                            <b>World Clock</b>
                        </Menu.Item>               
                    </Menu> 
                </GridColumn>
                <GridColumn stretched width={10}> 
                    <Routes>
                        <Route path='/calculator' element={<CalculatorGadget/>}/>
                        <Route path='/trivia' element={<TriviaGadget/>}/>
                        <Route path='/brewery' element={<BreweryGadget/>}/>
                        <Route path='/clock' element={<ClockGadget/>}/>
                    </Routes>
                </GridColumn>
                <GridColumn width={2}/>
            </GridRow>
        </Grid>
    )
}
