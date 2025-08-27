import Box from '@mui/material/Box'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'

function App() {
  const navItems = ['Home', 'Works', 'About Me', 'Contacts']
  return (
    <>
    <Box
      sx={{
        backgroundColor: '#1E1E1E',
        minHeight: '100vh',
      }}
    >
      <Navbar navItems={navItems}/>
      <Box sx={{border: 2, boxShadow: 1, pt: 2, color: 'white', backgroundColor: '#3A3A3A', m: 2, borderRadius: 2, textAlign: 'center'}}>
        <h1>Welcome to my Portfolio</h1>
      </Box>
    </Box>
    
    </>
  )
}

export default App
