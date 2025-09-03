import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import TerminalIcon from '@mui/icons-material/Terminal'

const Navbar = ({ navItems, setSelectedScreen }) => {
  const [open, setOpen] = useState(false) // Estado del Drawer (menú móvil)

  const toggleDrawer = (open) => () => {
    setOpen(open)
  }

  return (
    <>
      {/* Barra superior */}
      <AppBar position="static" sx={{ bgcolor: '#2D2D2D', color: '#D9D9D9' }}>
        <Toolbar>
          {/* Logo a la izquierda */}
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 'auto' }}>
            <TerminalIcon sx={{ width: 40, height: 40 }} />
          </Box>

          {/* Menú visible en pantallas grandes */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' }, // solo se muestra en escritorio
              gap: 3,
              fontFamily: 'Fira Code, monospace',
              fontSize: 20
            }}
          >
            {navItems.map((item, index) => (
              <Box
                key={index}
                sx={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  '&:hover': { color: '#ffffff' }
                }}
                onClick={() => setSelectedScreen(item.title)} // mantiene tu lógica
              >
                {item.icon}
                <Typography sx={{ ml: 1 }}>{item.title}</Typography>
              </Box>
            ))}
          </Box>

          {/* Botón hamburguesa en móviles */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'flex', md: 'none' } }} // solo se muestra en móvil
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer lateral (solo móviles) */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            bgcolor: '#2D2D2D',
            color: '#D9D9D9',
            height: '100%'
          }}
        >
          <List>
            {navItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  onClick={() => {
                    setSelectedScreen(item.title) // mantiene tu lógica
                    setOpen(false) // cierra el drawer
                  }}
                >
                  <ListItemIcon sx={{ color: '#D9D9D9' }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default Navbar
