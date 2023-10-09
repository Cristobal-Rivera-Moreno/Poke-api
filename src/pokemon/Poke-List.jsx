import { useState, useContext, useEffect } from "react";
import { PokeContext } from "../context/Poke-context";
import { PokeCard } from "./Poke-Card";
import { PokeInfo } from "./Poke-Info";
import axios from "axios";
import { Loading } from "../Loading";
export function PokeList() {
  const {pokemons,loading} = useContext(PokeContext);
  const [onePokemon,setOnePokemon] = useState();


  const {valuepoke,responseSearch} = useContext(PokeContext);
  const search = async()=>{
      try{
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${valuepoke}`);
      console.log("respuesta desde ", res.status);
      console.log("poki ",res.data)
      setOnePokemon(res.data)
        responseSearch('')
      }catch(err){
          console.log("error desde ", err.response);
          responseSearch('No se encontro el pokemon solicitado...');
      }
  }
  useEffect(()=>{
    if(valuepoke!='')
      search();
},[valuepoke]);


  return !pokemons ? (
  <>
    <Loading></Loading>
  </>
  ) : (
    <> 
    
    <div className="flex flex-row items-start mt-20">
      <div className="basis-3/5 grid grid-cols-1 lg:grid-cols-2" >
        {pokemons.map((item) => {
          return <PokeCard key={item.id} pokemon={item} infoPokemon={pokemon=>setOnePokemon(pokemon)}></PokeCard>;
        })}
      </div>
      <PokeInfo pokemon={onePokemon} ></PokeInfo>
    </div>
    </>
  );
}
