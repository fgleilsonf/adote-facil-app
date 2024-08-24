import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {CardMedia} from "@mui/material";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";

const bull = (
  <Box
    component="span"
    sx={{display: "inline-block", mx: "2px", transform: "scale(0.8)"}}
  >
    •
  </Box>
);

export default function PetsCards({pet, onClick}) {
  return (
    <Card
      onClick={onClick}
      sx={{
        minWidth: 112,
        minHeight: 90,
        maxHeight: 250,
        cursor: "pointer",
        backgroundColor: "#dcdcdc",
        borderRadius: "20px",
        boxShadow: "0px 0px 28px #3c3c3c23",
      }}
    >
      <CardMedia
        sx={{height: 150}}
        image={pet?.image}
        title="Cards"
      />


      <CardContent>
        <Typography variant="h5" component="div"
        style={{fontFamily:"Poppins", fontSize:"125%"}}>
          {pet.name}
        </Typography>
        <Typography variant="h5" component="div"
        style={{fontFamily:"Poppins", fontSize:"100%"}}>
          {pet.gender === true ? <MaleIcon/> : <FemaleIcon/>}
        </Typography>
        <Typography sx={{mb: 5.0}} color="text.secondary"></Typography>
        <Typography variant="body2"></Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}


