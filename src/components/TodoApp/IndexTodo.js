import React,{useState,useEffect} from 'react'
import { Box, TextField, Button ,Typography} from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ShowTodo from './ShowTodo'

const getLocalItem=()=>{
  const list = localStorage.getItem("lists")
  if(list){
    return JSON.parse(list)
  } else{
    return [];
  }
}
const IndexTodo = () => {
  const [todo,setTodo]= useState("");
  const [data,setData]= useState(getLocalItem())
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("I am Clicked")
    if(!todo){
        alert("please input some text")
    }else{
      // alert(todo)
      const newData=todo;
      setData([...data,newData])
      setTodo("")
    }
  }
  // deleteTodo
  const deleteItem=(a)=>{
    const finalData= data.filter((cur,index)=>{
      return index !==a;
    })
    setData(finalData)
  }
  useEffect(()=>{
    localStorage.setItem("lists",JSON.stringify(data))
  },[data])

  const onChange=(e)=>{
    setTodo(e.target.value.replace(/[^\w\s]/gi, ""))
  }
  return (
    <Box sx={{border:'2px dotted black',borderRadius:'8px',marginTop:'2rem',display:'inline-block'}}>
      <Typography margin={1.5} variant='h3'color="primary">Todo-List</Typography>
      <Box sx={{display:"inline-flex",alignContent:'center',justifyContent:'center'}}>
      <TextField label="Enter Todo" onChange={onChange} type="text" value={todo}/>
      <Button disableRipple variant="contained" onClick={handleSubmit}>
      <AddCircleIcon />
      </Button>
      </Box>
      <Box>
    {
      data.map((value,index)=>(
        <ShowTodo key={index}
        id={index}
        task={value}
        onSelect={deleteItem}
        />
        )) 
      }
      </Box>
    </Box>
  )
}

export default IndexTodo