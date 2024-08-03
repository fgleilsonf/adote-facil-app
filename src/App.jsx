import MyAppBar from "./components/AppBar";
import {Grid} from "@mui/material";
import PetsCards from "./components/PetsCards";
import PetDetails from "./components/PetDetails";

import { LIST_PETS } from "./data/Data";

function App() {

  const items = LIST_PETS;

  return (
    <>
    <MyAppBar title={"Adote Fácil"}  />
      <PetDetails petName={LIST_PETS[0].name} />
    <br /> <br />
      <Grid container spacing={5} sx={{display:"flex",justifyContent:"center"}}>
        {
          pets.map((pet, index) => (
            <Grid item xs={6} md={2} sm={8} >

        <PetsCards></PetsCards>


            </Grid>
          ))
        }

      </Grid>

    </>
  )
}

export default App
