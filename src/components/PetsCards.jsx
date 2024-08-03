import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  
  >
    •
  </Box>
);


export default function PetsCards({ pet }) {
  return (
    <Card sx={{ minWidth:112,minHeight:90, backgroundColor:"#dcdcdc", borderRadius:"20px", boxShadow:"0px 0px 28px #3c3c3c23"}}>

<CardMedia
        sx={{ height: 150 }}
        image={pet.image}
        title="green iguana"
      />
      
       
      <CardContent>
        <Typography variant="h5" component="div">
             {pet.name}
        </Typography>
        <Typography sx={{ mb: 5.0}} color="text.secondary">
        
          
        </Typography>
        <Typography variant="body2">
          
         
        </Typography>

      
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}

