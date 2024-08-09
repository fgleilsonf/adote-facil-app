import MyAppBar from "./components/AppBar";
import { Grid } from "@mui/material";
import PetsCards from "./components/PetsCards";
import PetDetails from "./components/PetDetails";
import RoutesComponent from './routes.jsx'

import { LIST_PETS } from "./data/Data";

function App() {
  const items = LIST_PETS;

  console.log("items", items);

  return (
    <>
      
      <MyAppBar title={"Adote Fácil"} />
      <br /> <br />
      <Grid
        container
        spacing={5}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {
          /* 
          Grid para os cards dos animais na página principal
          */
          items.map((pet) => (
            <Grid item xs={6} md={2} sm={8} key={pet.name}>
              <PetDetails pet={pet} />
            </Grid>
          ))
        }
      </Grid>
    </>
  );
}

export default App;
