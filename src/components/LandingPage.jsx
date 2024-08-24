import React from 'react';
import {useNavigate} from 'react-router-dom';
import MyToolbar from "./AppBar";
import "./Landing.css"
import Banner from '../assets/Banner.png';
import Pets from '../assets/Pets.png';
import {Avatar, Container} from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";


function LandingPage() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/home');
  };

  return (
    <Box id= 'box'>
      <Box sx={{display: 'flex', overflowX: 'hidden', boxSizing:'border-box', width: '90vw'}}>
        <MyToolbar title={"Adote Fácil"}/>
        <Box
          component="main"
          sx={{
            background: 'linear-gradient(to bottom, #3ac7f4, #6fdeff)',
            overflow: 'auto',
            overflowX: 'hidden',
            width: '100%',
            height: '100vh',
          }}
        >
          <Toolbar/>
          <Container id='conteúdo'>
            <Box mt={10} display={'flex'} flexDirection={'column'} id='esquerda'>
              <Typography id='text1'
                color={'#ff8200'}
                fontSize={'2.4em'}
                fontWeight={'700'}
                fontFamily={'Poppins, sans-serif'}
                fontStyle={'normal'}
                lineHeight={'1'}
              >Dê espaço para o seu melhor amigo</Typography>

              <Typography id='text2' color={'#FFF'} fontSize={'2em'} fontWeight={'600'} mt={2}>
                venha conhecer nossa família
              </Typography>

              <Box zIndex={1} mt={2}className='Bts'>
                <button className='Bt' onClick={handleButtonClick}>Adote</button>
                <button className='Bt' onClick={handleButtonClick}>Divulgue</button>
              </Box>
            </Box>
            <Box id='direita'>
                <Box position={'relative'} id='boxBanner'>
                    <Avatar top='0' src={Banner} className='img2' variant={'square'} sx={{
                      width: '400px',
                      height: '400px',
                      right: 0,
                      top: 0,
                      ml: 13,
                      '& .MuiAvatar-img': {
                        objectFit: 'contain !important'
                      }
                    }}/>
                </Box>  
            </Box>
          </Container>
          <Box id='imgs'>
                <Box position={'absolute'} right={'0'} bottom={'0px' } id='img'>
                  <Avatar src={Pets} className='img1_mobile' variant={'square'} sx={{
                    width: '500px',
                    height: '500px',
                    objectFit: 'contain',
                    margin:0,
                    border:0
                  }}/>
                </Box>
              </Box>
        </Box>
      </Box>
      
    </Box>
  );
}

export default LandingPage;