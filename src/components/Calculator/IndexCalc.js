import { Box, Grid, Paper, Button, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import db from "./db.json"
const IndexCalc = () => {
  const [value, setValue] = useState();
  const [sign, setSign] = useState();

  const buttonClick = (e) => {

    setValue(e.target.name)
    console.log(setValue(value.concat(e.target.name)))


  }
  function Calc() {
    setValue(eval(value).toString())
  }
  const Clear = () => {
    setValue("")
  }


  return (
    <>
      {/* main box */}
      <Box sx={{
        alignContent: 'center', margin: "auto", marginTop: '10px', height: '370px',
        width: '350px', border: '2px dotted black', borderRadius:'10px',alignItem:'center'
      }}>
        <Typography variant='h3' sx={{backgroundColor: "#9788F6"}}>
        Calculator

        </Typography>
        {/* screen box */}
        <Box sx={{
          margin: 'auto', marginTop: '10px', height: '50px',
          alignContent: 'right',alignItem:'center'
        }}>
          <Typography variant='h4' justifyContent='center'>
          {value}
          </Typography>
        </Box>
        {/* button box */}
        <Box sx={{ alignContent: 'center' ,display:'flex',flexDirection:'row'}}>
          <Grid container direction="row" 
            justifyContent="center" 
            alignItems="center" spacing={0.5}  sx={{ marginTop: '3px', alignContent: 'center' }}>
            {db.map((singledb) => (
              <Grid item key={singledb.id}  xl={4} lg={4} md={4} xs={4}>
                <Button disableRipple variant='contained' fullWidth  name={singledb.number} onClick={buttonClick}>{singledb.number}</Button>
              </Grid>
            ))}
            <Grid item  xl={4} lg={4} md={4} xs={4}>
            <Button disableRipple variant='contained' fullWidth name='Clear' onClick={Clear}>Clear</Button>
            </Grid>
            <Grid item xl={4} lg={12} md={12} xs={12}>
            <Button disableRipple variant='contained' fullWidth name='=' onClick={Calc}>=</Button>
            </Grid>

          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default IndexCalc