import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Link
} from '@mui/material'

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
            color: 'primary.main',
            textTransform: 'none',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '0%',
                height: '2px',
                backgroundColor: 'primary.main',
                transition: 'width 0.1s ease-in-out',
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
      <AppBar 
        position="static"
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none'
        }}
      >
        <Toolbar sx={{ 
          justifyContent: 'flex-end',
          backgroundColor: 'primary.main',
        }}>
          <Box>
            {renderNavigationButtons()}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
