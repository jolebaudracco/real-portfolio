import React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import TerminalIcon from '@mui/icons-material/Terminal';


const NAvbar = ({navItems, setSelectedScreen}) => {
  return (
    <>
        <Box sx={{
            color: '#D9D9D9',
            bgcolor: '#2D2D2D',
            border: 1,
            borderColor: '#000000',
            p: 0,
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'row',
            gap: 3,
            fontFamily: 'Fira Code, monospace',
            fontSize: 25,
            fontWeight: 'medium',
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'start',
                mr: 'auto', // Pushes the image to the left
                p: 2
            }}>
                <TerminalIcon sx={{width: 40, height: 40}}/>
            </Box>
            {navItems.map((item, index) => (
                // <Box key={index} component="span">{item}</Box>
                <Box 
                    key={index} 
                    component="span"
                    sx={{
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        '&:hover': {
                            color: '#D9D9D9', // This is the hover color
                            backgroundColor: '#2D2D2D',
                        },
                    }}
                    onClick={() => setSelectedScreen(item)}
                >
                    {item.icon}
                    <Box sx={{ml: 1,}}>{item.title}</Box>
                    
                </Box>
            ))}
        </Box>
    </>
    )
}

export default NAvbar