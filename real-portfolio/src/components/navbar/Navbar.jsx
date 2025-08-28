import React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import photo from '../../assets/jole.png'

const NAvbar = ({navItems, setSelectedScreen}) => {
  return (
    <>
        <Box sx={{
            color: '#D9D9D9',
            bgcolor: '#2D2D2D',
            border: 3,
            borderColor: '#000000',
            padding: 2,
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'row',
            gap: 4,
            fontFamily: 'Fira Code, monospace',
            fontSize: 25,
            fontWeight: 'medium',
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'start',
                mr: 'auto', // Pushes the image to the left

            }}>
                <Avatar
                    alt='photo'
                    src={photo}
                    sx={{
                        width: 40,
                        height: 40,
                        m: 0,
                        p: 0,
                    }}
                />
            </Box>
            {navItems.map((item, index) => (
                // <Box key={index} component="span">{item}</Box>
                <Box 
                    key={index} 
                    component="span"
                    sx={{
                        cursor: 'pointer',
                        '&:hover': {
                            color: '#D9D9D9', // This is the hover color
                            backgroundColor: '#2D2D2D',
                        },
                    }}
                    onClick={() => setSelectedScreen(item)}
                >
                    {item}
                </Box>
            ))}
        </Box>
    </>
    )
}

export default NAvbar