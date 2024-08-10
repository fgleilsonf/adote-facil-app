import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import App from "./App";

function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<App/>}/>
        <Route path='*' element={<h1>Not Found</h1>}/>

      </Routes>
    </BrowserRouter>
  );

}

export default RoutesComponent;