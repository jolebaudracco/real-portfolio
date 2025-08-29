import React from 'react'
import MyButton from '../buttons/MyButton'
import Box from '@mui/material/Box'

const Works = ({setSelectedScreen}) => {

  const handleClick = () => {
    setSelectedScreen('About Me')
  }

  return (
    <>
      <Box onClick={handleClick} sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 5,
      }}>
        <MyButton text={'About me'}/>
      </Box>
    </>
  )
}

export default Works