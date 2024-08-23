import React from 'react'
import ReactDOM from 'react-dom/client'
import RoutesComponent from './routes.jsx'
import {SnackbarProvider} from "notistack";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3}>
      <RoutesComponent/>
    </SnackbarProvider>
  </React.StrictMode>,
)
