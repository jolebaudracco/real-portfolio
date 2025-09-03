import Box from '@mui/material/Box'
import './App.css'
import Typography from '@mui/material/Typography'
import Navbar from './components/navbar/NAvbar'
import { useState } from 'react'
import Home from './components/home/Home'
import Works from './components/works/Works'
import AboutMe from './components/aboutMe/AboutMe'
import Contacts from './components/contacts/Contacts'
import HouseIcon from '@mui/icons-material/House';
import GitHubIcon from '@mui/icons-material/GitHub';
import PersonIcon from '@mui/icons-material/Person';
import ContactsIcon from '@mui/icons-material/Contacts';

function App() {
  const navItems = [
    {title:'Home', icon: <HouseIcon/>}, 
    {title:'Works', icon: <GitHubIcon/>}, 
    {title: 'About Me', icon: <PersonIcon/>}, 
    {title: 'Contacts', icon: <ContactsIcon/>}
  ]

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
        {selectedScreen === 'Home' && <Home setSelectedScreen={setSelectedScreen}/>}
        {selectedScreen === 'Works' && <Works setSelectedScreen={setSelectedScreen}/>}
        {selectedScreen === 'About Me' && <AboutMe setSelectedScreen={setSelectedScreen}/>}
        {selectedScreen === 'Contacts' && <Contacts setSelectedScreen={setSelectedScreen}/>}
      </Box>
    </>
  )}
 
export default App
