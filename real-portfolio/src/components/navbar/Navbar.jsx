import React from 'react'
import Box from '@mui/material/Box'

const Navbar = ({navItems}) => {
  return (
    <>
    <Box sx={{
        color: 'white',
        bgcolor: 'blue',
        padding: 2,
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        gap: 4,
    }}>
        {navItems.map((item, index) => (
            <Box key={index} component="span">{item}</Box>
        ))}
    </Box>
    </>
  )
}

export default Navbar