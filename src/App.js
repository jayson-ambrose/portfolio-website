import React, {useEffect} from 'react'
import Nav from './components/Nav';
import { Routes, Route, useNavigate} from 'react-router-dom'
import Welcome from './components/Welcome';
import ContactMe from './components/ContactMe';
import Projects from './components/Projects';
import Gadgets from './components/Gadgets';
import CalculatorGadget from './components/CalculatorGadget';
import TriviaGadget from './components/TriviaGadget';
import BreweryGadget from './components/BreweryGadget';
import ClockGadget from './components/ClockGadget';
import { Grid, GridColumn, GridRow } from 'semantic-ui-react';

function App() {

  const navigate = useNavigate()

  return (
    <Grid>
      <GridRow className='makeMeBlue'>
        <GridColumn textAlign='center'>
         <h2 className='namePlate'>Jayson Ambrose</h2>
         <h2 className='titlePlate'>Full-Stack Software Engineer</h2> 
        </GridColumn>
      </GridRow >
      <GridRow className='makeMeBlue'> 
        <Nav />
      </GridRow>
      <GridRow>
        <GridColumn textAlign='center'>
          <Routes>
            <Route exact path='/' element={<Welcome/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contact' element={<ContactMe/>}/>
            <Route path='/gadgets/*' element={<Gadgets/>}/>
          </Routes>
        </GridColumn> 
      </GridRow>    
    </Grid>
  );
}

export default App;
