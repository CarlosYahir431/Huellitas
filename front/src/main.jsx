import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Screens/Inicio';
import Login from './Screens/Login'
import RegistroUsuario from './Screens/RegistroUsuario'
import RegistroMascota from './Screens/RegistroMascota';
import Recordatorios from './Screens/Recordatorios';

import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
       <Recordatorios />


  </React.StrictMode>
)
