import React,{useReducer} from 'react'
import { AppBar, Button, Container, TextField, Typography, Toolbar, Box } from '@mui/material'

const Registration = () => {
    let initialValue={
        name:'',
        email:'',
        password:''
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
        // function handleSubmit(e){
        //     e.preventDefault();
        //     alert(state.name)
        // }
    async function handleSubmit(e){
       const response= await fetch('http://localhost:5000/api/request',{
           method:'POST',
           headers:{
               'Content-Type': 'application/json'
           },
            body: JSON.stringify({
                name:state.name ,
                email:state.email,
                password:state.password
            }),
        })
        const data= await response.json()
    }
    
    return (
        <>
            <Container maxWidth='sm' >
                <form>
                    <Box sx={{ display: 'flex', flexDirection: "column", marginTop: '30px' }}>

                        <Typography varaint='h2'>Registration Form</Typography>
                        <TextField required sx={{margin:'10px'}} value={state.name} onChange={(e)=> dispatch({type:'updateInput',value: e.target.value, key:'name'})} valueid="outlined-required" type='name' label="Enter Name" />
                        <TextField required sx={{margin:'10px'}} value={state.email} onChange={(e)=> dispatch({type:'updateInput',value: e.target.value, key:'email'})} id="outlined-required" type='email' label="Enter Email" />
                        <TextField required sx={{margin:'10px'}} value={state.password} onChange={(e)=> dispatch({type:'updateInput',value: e.target.value, key:'password'})} id="outlined-required" type='password' label="Enter Password" />
                        <Button variant='contained' onClick={handleSubmit} sx={{margin:'10px'}}color='info'>Submit</Button>
                    </Box>

                </form>
            </Container>
        </>

    )
}

export default Registration