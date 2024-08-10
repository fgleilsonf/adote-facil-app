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
    <Box sx={{display: 'flex', overflowX: 'hidden'}}>
      <MyToolbar title={"Adote Fácil"}/>
      <Box
        component="main"
        sx={{
          background: 'linear-gradient(to bottom, #3ac7f4, #a4e4fa)',
          overflow: 'auto',
          overflowX: 'hidden',
          width: '100%',
          height: 'calc(100vh)',
        }}
      >
        <Toolbar/>
        <Container>
          <Box mt={10} display={'flex'} flexDirection={'column'}>
            <Typography
              color={'#ff8200'}
              fontSize={'2.4em'}
              fontWeight={'700'}
              fontFamily={'Poppins, sans-serif'}
              fontStyle={'normal'}
              lineHeight={'1'}
            >Dê espaço para o seu melhor amigo</Typography>

            <Typography color={'#FFF'} fontSize={'1.6em'} fontWeight={'600'} mt={2}>
              venha conhecer nossa família
            </Typography>

            <Box zIndex={1} mt={2}>
              <button className='Bt' onClick={handleButtonClick}>Adote</button>
              <button className='Bt' onClick={handleButtonClick}>Divulgue</button>
            </Box>

            <Box position={'absolute'} top={320}>
              <Avatar src={Banner} className='img2' variant={'square'} sx={{
                width: '100%',
                height: 500,
                ml: 13,
                '& .MuiAvatar-img': {
                  objectFit: 'contain !important'
                }
              }}/>
            </Box>
            <Box position={'absolute'} bottom={'43px'} right={0}>
              <Avatar src={Pets} className='img1_mobile' variant={'square'} sx={{
                width: '100%',
                height: 350,
                objectFit: 'contain'
              }}/>
            </Box>
          </Box>
          {/*<section style={{}}>*/}
          {/*  <div className="container">*/}
          {/*    <div className="text">*/}

          {/*      <div className="bts">*/}
          {/*        <button className='Bt' onClick={handleButtonClick}>Adote</button>*/}
          {/*        <button className='Bt' onClick={handleButtonClick}>Divulgue</button>*/}
          {/*      </div>*/}

          {/*      <div className="boxImg">*/}
          {/*        <img src={Banner} className='img2'/>*/}
          {/*        <img src={Pets} className='img1'/>*/}

          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className='img_mobile'>*/}
          {/*    <img src={Pets} className='img1_mobile'/>*/}
          {/*  </div>*/}
          {/*</section>*/}
        </Container>
      </Box>
    </Box>
  );
}

export default LandingPage;