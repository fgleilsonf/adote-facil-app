import MyAppBar from "./components/AppBar";
import { Grid } from "@mui/material";
import PetDetails from "./components/PetDetails";
import { LIST_PETS } from "./data/Data";

function App() {
  const items = LIST_PETS;

  return (
    <>
      <MyAppBar title={"pet"} />
      <PetDetails petName={LIST_PETS[0].name} />
    </>
  );
}

export default App;
