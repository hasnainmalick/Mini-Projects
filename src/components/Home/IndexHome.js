import React from 'react'
import { Box, CardMedia, Typography } from '@mui/material'
import mainimage from '../Images/mainimage.jpg'
import About from './About'

const IndexHome = () => {
  return (
    <>
    <Box sx={{ display:"inline-flex",alignItems:'center' }}>
      <Box sx={{width:700,alignContent:'center'}}>
      <Typography variant='h3' sx={{fontFamily:  'Montserrat'}}>
        we are creative group of people who develope influential branded Web and digital experience
      </Typography>
        </Box>
        {/* position: 'absolute', right: '4px' */}
      <Box sx={{ height: "auto", width: '400px', margin: '20px', paddingRight: '10px' }}>
        <CardMedia component="img"
          height="440px"
          image={mainimage}
          alt="green iguana" />
      </Box>
    </Box>
      <About/>
    </>
  )
}

export default IndexHome