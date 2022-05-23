import React from 'react'
import {AppBar, Box, Toolbar, Typography, Button, Stack } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = (theme) => {
  return (
<Box>
        <AppBar position="sticky" color='secondary' sx={{top:"auto",bottom:0 ,alignItems:'center'}} >
            <Toolbar>
            <Stack>
            <Typography aligncenter> &copy; All right reserved to Hasnain MaliCk</Typography>
            <Button disableRipple variant="outlined" textTransform startIcon={<InstagramIcon/>} sx={{color:"white",textTransform:'none'}}>hasnain__malick</Button>
            </Stack>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Footer