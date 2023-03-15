import { Box } from '@mui/system'
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          
        </Typography>
        <Button color="inherit"><Link to ='/' style={{color:'white',textDecoration:'none'}}>Login</Link></Button>
        <Button><Link to ='/contact' style={{color:'white'}}>Contact</Link></Button>
        <Button color="inherit"><Link to ="/signup" style={{color:'white',textDecoration:'none'}}>Signup</Link></Button>
      </Toolbar>
    </AppBar>
  </Box>
  );
}

export default Navbar
