import Box from '@mui/material/Box'
import './App.css'
import Typography from '@mui/material/Typography'
import Navbar from './components/navbar/NAvbar'
import { useState } from 'react'
import Home from './components/home/Home'
import Works from './components/works/Works'
import AboutMe from './components/aboutMe/AboutMe'
import Contacts from './components/contacts/Contacts'

function App() {
  const navItems = ['Home', 'Works', 'About Me', 'Contacts']

  const [selectedScreen, setSelectedScreen] = useState('Home')
  console.log(selectedScreen)
  return (
    <>
      <Box
        sx={{
          backgroundColor: '#2D2D2D',
          minHeight: '100vh',
        }}
      >
        <Navbar navItems={navItems} setSelectedScreen={setSelectedScreen}/>
        {selectedScreen === 'Home' && <Home/>}
        {selectedScreen === 'Works' && <Works/>}
        {selectedScreen === 'About Me' && <AboutMe/>}
        {selectedScreen === 'Contacts' && <Contacts/>}
      </Box>
    </>
  )}
 
export default App
