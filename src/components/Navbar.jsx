import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box
} from '@mui/material'
import { Link } from 'react-router-dom'

function Navbar() {
  const navigationItems = [
    { id: 'about', label: 'about', href: '/about' },
    { id: 'projects', label: 'projects', href: '/projects'},
    { id: 'services', label: 'services', href: '/services' },
    { id: 'contact', label: 'contact', href: '/contact' },
  ];

  const renderNavigationButtons = () => (
    <>
      {navigationItems.map((item) => (
        <Button
          key={item.id}
          component={Link}
          to={item.href}
          color='inherit'
          sx={{
            height: 34,
            color: 'background.default',
            textTransform: 'none',
            position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '0%',
                height: '2px',
                backgroundColor: 'background.default',
                transition: 'width 0.15s ease-in-out',
              },
              '&:hover::after': {
                width: '100%',
              },
              '&:hover': {
                backgroundColor: 'transparent',
            }
          }}
        >
          <Typography variant='h5'>
            {item.label}
          </Typography>
        </Button>
      ))}
    </>
  );
  
  return (
    <>

      <Box
        sx={{
          height: 10, 
          backgroundColor: 'secondary.main',
          clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',          
          marginTop: -0.5,
        }}
      />
      <Box
        sx={{
          position: 'relative',
          backgroundColor: 'primary.main',
          clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
        }}
      >
        <AppBar 
          position="static"
          sx={{
            backgroundColor: 'primary.main',
            boxShadow: 'none',
          }}
        >
          <Toolbar sx={{ 
            justifyContent: 'flex-end',
          }}>
            <Box>
              {renderNavigationButtons()}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Navbar
