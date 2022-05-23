import React from 'react'
import { Box, Typography , CardMedia, ButtonGroup,Button, Link} from '@mui/material'
import image6 from '../Images/image6.jpg'
import Footer from '../footer/Footer'
// icon
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const About = () => {
  return (
      <>
        <Box sx={{fontFamily:  'Montserrat',fontWeight:'bold'}}>
            <Typography variant='h2' sx={{fontFamily:  'Montserrat'}}>About us</Typography>
        </Box>
    <Box sx={{ display:"inline-flex",alignItems:'center'}}>
        <Box sx={{ height: "auto", width: '400px', margin: '20px', paddingRight: '10px' }}>
        <CardMedia component="img"
          height="440px"
          image={image6}
          alt="green iguana" />
      </Box>
        <Box sx={{width:700,alignContent:'center'}}>
        <Typography variant='h5' sx={{fontFamily:  'Montserrat',color:'black'}}>
        We have strong MERN Stack development experience. We created basic projects for individual learning on this site. For the front-end, we used React JS, Material-UI React Router, and Node-JS for backend. We can set up a website that meets your requirements. If you are concerned about your project, please feel free to contact us we would provide the best solution and ensured fast delivery.    
        </Typography>
        <Typography variant='h4' marginTop='14px'>Portfolio Link</Typography>
        <ButtonGroup orientation="vertical"
        aria-label="vertical contained button group"
        variant="outlined" disableRipple>
            <Button startIcon={<GitHubIcon/>}>
                <Link href='https://github.com/HasnainMaliCk' underline="none" target="_blank" rel="noopener"
                sx={{textTransform:'none',}}>HasnainMaliCk</Link>
                </Button>
            <Button startIcon={<LinkedInIcon/> }>
            <Link href='https://www.linkedin.com/in/hasnain-malick-2967081a9' underline="none" target="_blank" rel="noopener"
                sx={{textTransform:'none',}}>Hasnain MaliCk</Link>

            </Button>
            <Button startIcon={<EmailIcon/> }sx={{textTransform:'none'}}>hasnainmalick21@gmail.com</Button>
        </ButtonGroup>
        </Box>
    </Box>
    <Footer/>
    </>
  )
}

export default About