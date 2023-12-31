import { useContext, useEffect } from "react";
import { PokeContext } from "../context/Poke-context";
import axios from "axios";


import './pokeInfo.css';
export function PokeInfo({pokemon}){
    const {valuepoke,responseSearch} = useContext(PokeContext);
    const search = async()=>{
        try{
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${valuepoke}`);
        console.log("respuesta desde ", res.status);
        pokemon = res.data;
        console.log("poki ",pokemon)
        }catch(err){
            console.log("error desde ", err.response);
        }
    }

    return (
        <div id="more-info" className="flex hidden flex-col items-center bg-blue-100 rounded basis-2/5 fixed h-auto top-1/5 w-80 md:w-2/6 md:left-2/3 lg:w-1/4 left-0 lg:left-3/4 lg:h-auto border-8 border-blue-400 border-dashed ">
            <button className="text-black self-end w-10 h-10 rounded-full bg-black/10 font-bold hover:scale-105 hover:bg-black/20" onClick={(ev)=>document.getElementById('more-info').classList.toggle('hidden')}>X</button>
            {pokemon?(
                <>
            <img src={pokemon.sprites.front_default} className="w-40 md:w-40 lg:w-3/5" alt="" />
            <h1 className="text-black font-mono font-bold text-3xl  stroke-white stroke-1 name">{pokemon.name}</h1>
            {pokemon.stats.map((item,i)=>{
                return <div key={i} className="ml-2 self-start flex flex-row">
                <h1 className="text-black font-bold">{item.stat.name} : </h1>
                <h1 className="text-black">{item.base_stat}</h1>
            
                </div>
            })}
             <h1 className="text-black font-mono font-bold text-3xl">Habilidades</h1>
            <div  className="self-start w-full h-full overflow-hidden bg-blue-400/30 flex flex-row flex-wrap">
               
            {pokemon.abilities.map((item,i)=>{
                return (
                    <div key={i} className="bg-red-400 m-2 h-10 rounded p-2 font-mono font-bold text-white" >
                        <h1 className="abilities">{item.ability.name}</h1>
                    </div>
                )
            })}
             </div>
            </>):<h1 className="font-mono font-bold text-black">No se ha seleccionado ningún pokemon</h1>}
        </div>
    );


}