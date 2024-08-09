import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AppBar from "@mui/material/AppBar";
import MyAppBar from "./AppBar";
import "./Landing.css"
import Banner from '../assets/Banner.png';
import Pets from '../assets/Pets.png';


function LandingPage() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/home'); 
  };
  return (
    <>

    <MyAppBar title={"Adote Fácil"} />
    <section>
      
      <div className="container">
        <div className="text">
        <h1>Dê espaço para o seu melhor amigo <br /> <span>venha conhecer nossa família</span></h1>
        <div className="bts">
        <button className='Bt' onClick={handleButtonClick}>Adote</button>
        <button className='Bt' onClick={handleButtonClick}>Divulgue</button>
        </div>
        
        <div className="boxImg">
          <img src={Banner} className='img2'/>
          <img src={Pets} className='img1'/>
          
        </div>
        </div>
      </div>
      <div className='img_mobile'>
      
      <img src={Pets} className='img1_mobile'/>
      </div>
    </section>
    
    

    </>
  );
}

export default LandingPage;