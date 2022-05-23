import React, { useState,useRef } from 'react'
import { Box, ButtonGroup, Button, Paper, Typography,  } from '@mui/material'
const StopWatch = () => {
  const [time, setTime] = useState("loading...")
  const [second, setSecond] = useState(0)
  const [minute, setMinute] = useState(0)

  const updateTime = () => {
    const time = new Date().toLocaleTimeString();
    setTime(time);
  }
  setInterval(updateTime, 1000);
  var timer=useRef();
  const startTimer=()=>{
    timer.current=setInterval(()=>{
      setSecond(prev=>prev+1)
      if(second===59){
        setMinute(prev=>prev+1)
        setSecond(0)
      }
    },1000)  }
  
  const StopTimer=()=>{
    clearInterval(timer.current)
    timer.current=0;
  }
     
  const Restart=()=>{
    setSecond(0)
    setMinute(0)
    StopTimer();
  }

  return (
    <Box sx={{ display: 'inline-flex', alignContent: "center", marginTop: "1rem" }}>
      <Box variant='paper' onChange={updateTime}
        sx={{ width: 600, height: "auto",  }}>
        <Typography variant='h1'>{time}</Typography>
        <Box sx={{display:'inline-flex',flexDirection:'column',}} >
        <Button variant="contained" sx={{textTransform:"none"}}><Typography variant='h3'>Timer</Typography></Button>
        <Paper sx={{margin:"2rem",padding:"1rem"}} elevation={3}>
          <Typography variant='h3'>
          {minute<10 ? "0"+minute : minute  }:{second<10 ? "0"+second: second}
          </Typography>
          </Paper>
        <ButtonGroup disableRipple sx={{marginBottom:"1rem"}} variant="contained" aria-label="outlined primary button group">
          <Button onClick={startTimer}>Start</Button>
          <Button onClick={StopTimer}>Stop</Button>
          <Button onClick={Restart}>Restart</Button>
        </ButtonGroup>
        </Box>
      </Box>
    </Box>
  )
}

export default StopWatch