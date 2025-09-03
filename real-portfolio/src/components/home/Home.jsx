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
        flexDirection: { xs: 'column', md: 'row' }, // responsivo
        alignItems: 'center',
        justifyContent: 'center',
        gap: { xs: 5, md: 20 }, // menos espacio en móvil
        p: { xs: 5, md: 20 }, // menos padding en móvil
        textAlign: { xs: 'center', md: 'left' } // centra texto en móvil
      }}>
        <Box sx={{
          fontFamily: 'Fira Code, monospace',
          fontWeight: 'SemiBold',
          maxWidth: '900px',
        }}>
          <Typography sx={{
            color: '#ABB2BF', 
            fontSize: { xs: 28, md: 56 }, //más chico en móvil
            lineHeight: 'auto'
            }}>
              Jole Baudracco, a
          </Typography>

          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, // stack en móvil, inline en desktop
            alignItems: { xs: 'center', md: 'center' }, // responsivo
            gap: 2, 
            mt: 1, // margen superior para separar del texto
          }}>
            <Typography sx={{
              color: '#C778DD', 
              fontSize: { xs: 28, md: 56 },
            }}>
                QA Tester
            </Typography>
            <Typography sx={{
              color: '#ABB2BF', 
              fontSize: { xs: 28, md: 56 },
              }}>
                and
            </Typography>
          </Box>

          <Typography sx={{
            color: '#C778DD', 
            fontSize: { xs: 28, md: 56 },
            }}>
              Web Developer
          </Typography>

          <Typography variant='body1' sx={{
            color: '#ABB2BF',
            fontSize: { xs: 28, md: 56 },
          }}>
            I craft beautiful, responsive and functional websites.
            Where technology meets creativity.
          </Typography>
          
          <Box onClick={handleClick} sx={{
            mt: 5,
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-start' }, // centrado en móvil
            cursor: 'pointer'
          }}>
            <MyButton  text={'Contact Me'}/>
          </Box>
        </Box>

        <Box sx={{
          width: { xs: 200, md: 300 }, // más chica en móvil
          height: { xs: 200, md: 300 },
          borderRadius: '50%', // redondeada, queda más elegante
          overflow: 'hidden',
          boxShadow: 3,
          flexShrink: 0, // evita que se achique
          mt: { xs: 4, md: 0 } // agrega margen arriba en móvil
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