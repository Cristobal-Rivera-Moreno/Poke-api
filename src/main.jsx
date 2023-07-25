import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {PokeContextProvider} from './context/Poke-context.jsx'
import { Rights } from './Rights.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PokeContextProvider>
 <React.StrictMode>
    <Rights/>
      <App />
    
  </React.StrictMode>
  </PokeContextProvider>
    
)
