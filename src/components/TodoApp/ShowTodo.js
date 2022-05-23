import { Paper ,Button, Box} from '@mui/material'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import React from 'react'

const ShowTodo = (props) => {
  return (
    <Box sx={{display:'flex',justifyContent:'center',marginTop:"5px"}}>
        <Paper elevation={3} sx={{width:220,color:"black",textTransform:'capitalize'}}>{props.task}</Paper>
        <Button disableRipple size='small' variant='contained'
        onClick={()=>{
          props.onSelect(props.id)
        }}
        >{<RemoveCircleIcon/>}</Button> 
    </Box>
  )
}

export default ShowTodo