import './styles/App.css';
import React, {useEffect} from 'react'
import Nav from './components/Nav';
import { Routes, Route, useNavigate} from 'react-router-dom'
import Welcome from './components/Welcome';
import ContactMe from './components/ContactMe';
import Projects from './components/Projects';

function App() {

  const navigate = useNavigate()

  useEffect(() => {
    navigate('/welcome')
  }, [])

  return (
    <div className="mainContainer">
      <h2 className='headLine'>Jayson Ambrose, Full-Stack Software Engineer</h2>
      <Nav />
      <Routes>
        <Route path='/' element={null}/>
        <Route path='/welcome' element={<Welcome/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<ContactMe/>}/>
      </Routes>      
    </div>
  );
}

export default App;
