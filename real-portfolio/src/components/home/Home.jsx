import React from 'react'
import Button from '../buttons/MyButton'
import MyButton from '../buttons/MyButton'
import Box from '@mui/material/Box'

const Home = ({setSelectedScreen}) => {

const handleClick = () => {
  setSelectedScreen('Works')
}
  return (
    <>
        <Box sx={{
          color: 'white',
          fontFamily: 'Fira Code, monospace',
          fontSize: 30,
          textAlign: 'center',
          mt: 10,
        }}>
          Jole Baudracco, a Web Developer and a QA Tester
        </Box>
        <Box onClick={handleClick} sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 5,
        }}>
          <MyButton  text={'Works'}/>
        </Box>
    </>
  )
}

export default Home