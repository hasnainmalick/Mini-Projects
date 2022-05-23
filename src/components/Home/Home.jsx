import React from 'react'
import {Box} from '@mui/material'
import Navbar from './Navbar'

const Home = () => {
 
  return (
    <Box sx={{display:'flex',flexDirection:"column"}}>
      <Navbar/>      
    </Box>
  )
}

export default Home