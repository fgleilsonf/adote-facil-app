import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import PetsCards from "./PetsCards";
import { Stack } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import '../assets/styles/PetDetails.css';
import { Link } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PetDetails({ pet }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    //Puxando os cards dos pets como um "botão" para a aba de detalhes dos pets

    <React.Fragment>
      <PetsCards pet={pet} onClick={handleClickOpen} />
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Sobre
            </Typography>
          </Toolbar>
        </AppBar>
        <List className="image">
          <img src={pet.image} className="pet-image" />
          <Stack className="basic-info">
            <Typography variant="h4">{pet.name} {pet.gender === true? <MaleIcon /> : <FemaleIcon />} </Typography>
            <Typography variant="h4">{pet.age} Anos</Typography>
          </Stack>
          <Typography variant="h4" className="race">{pet.race}</Typography>
          <Stack className="description">
            <Typography variant="h5">Descrição:</Typography>
            <Typography variant="p">{pet.description}</Typography>
          </Stack>
          <Stack>
            <Typography variant="h5">Características:</Typography>
            <Typography variant="p">{pet.characteristics}</Typography>
          </Stack>
        </List>
        <button>me adote</button>
      </Dialog>
    </React.Fragment>
  );
}
