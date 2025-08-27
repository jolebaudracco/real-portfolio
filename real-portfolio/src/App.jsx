import Box from '@mui/material/Box'
import './App.css'
import Typography from '@mui/material/Typography'
import Navbar from './components/navbar/NAvbar'

function App() {
  const navItems = ['Home', 'Works', 'About Me', 'Contacts']
  return (
    <>
    <Box
      sx={{
        backgroundColor: '#2D2D2D',
        minHeight: '100vh',
      }}
    >
      <Navbar navItems={navItems}/>
    </Box>
    
    </>
  )
}
export default App
