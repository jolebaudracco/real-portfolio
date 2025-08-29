import Box from '@mui/material/Box'
import React from 'react'
import MyButton from '../buttons/MyButton'

const AboutMe = ({setSelectedScreen}) => {

  const handleClick = () => {
    setSelectedScreen('Contacts')
  }

  return (
    <>
      <Box  onClick={handleClick} sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 5,
      }}>
        <MyButton text={'Contacts'}/>
      </Box>
    </>
  )
}

export default AboutMe