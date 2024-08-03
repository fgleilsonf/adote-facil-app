import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  
  >
    •
  </Box>
);


export default function PetsCards() {
  return (
    <Card sx={{ minWidth:100,minHeight:250, backgroundColor:"#696969", borderRadius:"20px", boxShadow:"10px"}}>

     
       
      <CardContent>
        <Typography variant="h5" component="div">
             
        </Typography>
        <Typography sx={{ mb: 35.0}} color="text.secondary">
        
          
        </Typography>
        <Typography variant="body2">
          
         
        </Typography>

      
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}

