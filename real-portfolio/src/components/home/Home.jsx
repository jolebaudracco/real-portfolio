import React from 'react'
import Button from '../buttons/MyButton'
import MyButton from '../buttons/MyButton'
import Box from '@mui/material/Box'
import portfolio from '../../assets/portfolio.png'
import Typography from '@mui/material/Typography'


const Home = ({setSelectedScreen}) => {
const handleClick = () => {
  setSelectedScreen('Contacts')
}
  return (
    <>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20, // espacio entre texto e imagen
        p: 20,
      }}>
        <Box sx={{
          fontFamily: 'Fira Code, monospace',
          // fontSize: { xs: 24, md: 36 }, // responsivo
          fontWeight: 'bold',
          textAlign: 'left',
          maxWidth: '900px',
        }}>
          <Typography sx={{
            color: 'white', 
            fontSize: { xs: 32, md: 56 }
            }}>
              Jole Baudracco, a
          </Typography>

          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, // responsivo
            alignItems: { xs: 'flex-start', md: 'center' }, // responsivo
            gap: 2, // espacio entre Web Developer y and
          }}>
            <Typography sx={{
              color: '#C778DD', 
              fontSize: { xs: 32, md: 56 }}}>
                Web Developer
            </Typography>
            <Typography sx={{
              color: 'white', 
              fontSize: { xs: 32, md: 56 }}}>
                and
            </Typography>
          </Box>

          <Typography sx={{
            color: '#C778DD', 
            fontSize: { xs: 32, md: 56 }}}>
              QA Tester
          </Typography>
          <Box onClick={handleClick} sx={{
          position: 'central', 
          bottom: 20, 
          right: 20, 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          p: 5,
        }}>
          <MyButton  text={'Contact Me'}/>
        </Box>
        </Box>
        <Box sx={{
          width: 300,
          height: 300,
          borderRadius: '50%', // redondeada, queda más elegante
          overflow: 'hidden',
          boxShadow: 3,
          flexShrink: 0, // evita que se achique
        }}>
          <img 
          src={portfolio} 
          alt='portfolio'
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
      </Box>
    </>
  )
}

export default Home