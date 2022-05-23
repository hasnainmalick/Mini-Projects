import React,{useReducer} from 'react'
import {Button, Container, TextField, Typography, Box } from '@mui/material'

const Registration = () => {
    let initialValue={
        name:'',
        email:'',
        query:''
    }
    const [state,dispatch] = useReducer(reducer,initialValue);
    function reducer(state,action){
        switch(action.type){
            case 'updateInput':
                return{
                    ...state,
                    [action.key]:action.value
                }
            default:
            return state;
            }
        }
    async function handleSubmit(e){
       const response= await fetch('http://localhost:5000/api/request',{
           method:'POST',
           headers:{
               'Content-Type': 'application/json'
           },
            body: JSON.stringify({
                name:state.name ,
                email:state.email,
                query:state.query
            }),
        })
        const data= await response.json()
        console.log(data)
    }
    
    return (
        <>
            <Container maxWidth='sm' >
                <form>
                    <Box sx={{ display: 'flex', flexDirection: "column", marginTop: '30px' }}>

                        <Typography variant='h2'>Registration Form</Typography>
                        <TextField required sx={{margin:'10px'}} value={state.name} onChange={(e)=> dispatch({type:'updateInput',value: e.target.value, key:'name'})} valueid="outlined-required" type='name' label="Enter Name" />
                        <TextField required sx={{margin:'10px'}} value={state.email} onChange={(e)=> dispatch({type:'updateInput',value: e.target.value, key:'email'})} id="outlined-required" type='email' label="Enter Email" />
                        <TextField multiline rows={4} required sx={{margin:'10px'}} value={state.query} onChange={(e)=> dispatch({type:'updateInput',value: e.target.value, key:'query'})} id="outlined-required" type='query' label="Enter Query" />
                        <Button variant='contained' onClick={handleSubmit} sx={{margin:'10px'}}color='secondary'>Submit</Button>
                    </Box>

                </form>
            </Container>
        </>

    )
}

export default Registration