import MyAppBar from "./components/AppBar";
import { Grid } from "@mui/material";
import PetsCards from "./components/PetsCards";
import PetDetails from "./components/PetDetails";

import { LIST_PETS } from "./data/Data";

function App() {
  const items = LIST_PETS;

  return (
    <>
      <MyAppBar title={"Adote Fácil"} />
      <br /> <br />
      <Grid
        container
        spacing={5}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {items.map((pet) => (
          <Grid item xs={6} md={2} sm={8}>
            <PetDetails
        petName={pet.name}
        petGender={pet.gender}
        petAge={pet.age}
        petRace={pet.race}
        petDescription={pet.description}
        petCharacteristics={pet.characteristics}
      />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default App;
