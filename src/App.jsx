import MyAppBar from "./components/AppBar";
import {Grid} from "@mui/material";

function App() {

  const pets = [
    "Gato 1", "Pet 2", "Cachorro 3", "Pet 4",
    "Gato 1", "Pet 2", "Cachorro 3", "Pet 4",
  ]

  return (
    <>
      <Grid container spacing={2}>
        {
          pets.map((pet, index) => (
            <Grid item xs={12} md={6} sm={12}>
              <MyAppBar title={pet} color={index % 2 === 0 ? "success" : 'error'} />
            </Grid>
          ))
        }
      </Grid>
    </>
  )
}

export default App
