import Box from '@mui/material/Box'
import React from 'react'
import MyButton from '../buttons/MyButton'

const Contacts = ({setSelectedScreen}) => {
  const handleClick = () => {
    setSelectedScreen('Home')
  }
  return (
    <>
      <Box  onClick={handleClick} sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 5,
      }}>
        <MyButton text={'Home'}/>
      </Box>
    </>
  )
}

export default Contacts