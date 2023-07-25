import { useState,useEffect, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import { PokeContext } from './context/Poke-context';
import { PokeList } from './pokemon/Poke-List';
function App() {
 
  return (
    <>

      <PokeList></PokeList>
    </>
  )
}

export default App
