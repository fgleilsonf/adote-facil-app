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
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import "../assets/styles/PetDetails.css";
import { Link } from "react-router-dom";

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
    <React.Fragment>
      <PetsCards pet={pet} onClick={handleClickOpen} />
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        className="pet-dialog"
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
        <Stack className="content">
          <img src={pet.image} className="pet-image" />
          <Stack
            className="basic-info"
            direction="row"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="h6">
              {pet.name}{" "}
              {pet.gender === true ? (
                <MaleIcon className="male" />
              ) : (
                <FemaleIcon className="female" />
              )}
            </Typography>
            <Typography variant="h6">{pet.age} Anos</Typography>

            <Typography variant="h7" className="race">
              {pet.race}
            </Typography>
          </Stack>

          <Stack className="description">
            <Typography variant="h5">Descrição:</Typography>
            <Typography variant="p">{pet.description}</Typography>
          </Stack>
          <Stack className="characteristics">
            <Typography variant="h5">Características:</Typography>
            <Typography variant="p">{pet.characteristics}</Typography>
          </Stack>
          <button className="Bt">Me adote</button>
        </Stack>
      </Dialog>
    </React.Fragment>
  );
}
