import { AppBar, Container, Toolbar, styled, Hidden, IconButton, SwipeableDrawer, Box, Divider, List, ListItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import StopWatch from '../StopWatch/StopWatch'
import IndexCalc from '../Calculator/IndexCalc'
import IndexHome from './IndexHome'
// Todo App
import IndexTodo from '../TodoApp/IndexTodo'
import Registration from '../Registration'
// import MenuIcon from '@mui/icons-material/Menu';
import MenuIcon from '@mui/icons-material/MenuOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBackIos';


function Navbar() {
    const LinkRouter = styled(Link)({
        textDecoration: 'none',
        color: 'white',
        padding: '20px',
        margin: 'auto',
        // fontFamily: 'Lexend Deca',
    })
    const LinkRouterResp = styled(Link)({
        textDecoration: 'none',
        color: 'black',
        padding: '20px',
        margin: 'auto',
        // fontFamily: 'Lexend Deca',
    })
    const [open, setOpen] = useState(false)
    return (
        <div>
            <Hidden lgDown>
                <AppBar position='sticky'>
                    <Container maxWidth="md">
                        <Toolbar disableGutters>
                            {/* <Avatar className={classes.avatar}>HH</Avatar> */}
                            <LinkRouter to="/"> Home</LinkRouter>
                            <LinkRouter to="todo-list"> Todo List</LinkRouter>
                            <LinkRouter to="calculator"> Calculator</LinkRouter>
                            <LinkRouter to="stop-watch"> Stop Watch </LinkRouter>
                            <LinkRouter to="contact">Contact Us</LinkRouter>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Hidden>
            <Hidden lgUp>
                <AppBar>
                    <Toolbar>
                        {/* <Box> */}
                        <IconButton >
                            <MenuIcon sx={{color:'white'}} onClick={() => setOpen(true)} />
                        </IconButton>
                        <Typography sx={{paddingLeft:'40px',fontFamily:'Montserrat'}}>
                            Project Web
                        </Typography>
                        {/* </Box> */}
                    </Toolbar>
                </AppBar>
            </Hidden>
            <SwipeableDrawer anchor="right" open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
                <Box>
                    <IconButton>
                        <ArrowBackIcon onClick={() => setOpen(false)} />
                    </IconButton>
                </Box>
                <Divider />
                <List >
                    <ListItem sx={{ color: "black" }}>
                        <LinkRouterResp to="/"> Home</LinkRouterResp>
                    </ListItem>
                    <ListItem>
                        <LinkRouterResp to="todo-list"> Todo List</LinkRouterResp>
                    </ListItem>
                    <ListItem>
                        <LinkRouterResp to="calculator"> Calculator</LinkRouterResp>
                    </ListItem>
                    <ListItem><LinkRouterResp to="stop-watch"> Stop Watch</LinkRouterResp>
                    </ListItem>
                    <ListItem><LinkRouterResp to="contact">Contact Us</LinkRouterResp>
                    </ListItem>
                </List>
            </SwipeableDrawer>


            <Routes>
                <Route path='/' element={<IndexHome />} />
                <Route path='stop-watch' element={<StopWatch />} />
                <Route path='calculator' element={<IndexCalc />} />
                <Route path='todo-list' element={<IndexTodo />} />
                <Route path='contact' element={<Registration />} />
            </Routes>
        </div>
    )
}

export default Navbar