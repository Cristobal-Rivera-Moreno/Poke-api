import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
export const PokeContext = createContext();

export function PokeContextProvider(props) {
    const [pokemons,setPokemons] = useState(null);
    const [url, setUrl] = useState ( 'https://pokeapi.co/api/v2/pokemon' );
    const [nextUrl,setNextUrl] = useState();
    const [previousUrl,setPreviousUrl] = useState();
    const [loading, setLoading] = useState(true);
    const [search,setSearch] = useState('');
    const [valuepoke,setValuePoke] = useState('');
    const [msg,setMsg] = useState('');
    const responseSearch = (msg)=>{
      setMsg(msg)
    }
    const pokeFun = async()=>{
      const res = await axios.get(url);
     
      console.log("res=> ",res.data.next );
      setNextUrl(res.data.next);
      
      setPreviousUrl(res.data.previous);
      let array = [];
      res.data.results.forEach(element => {
        array.push(axios.get(element.url));
      });
      let results = await Promise.all(array);
      console.log("results--> ",results)
      let data = results.map(item=>item.data)
      setPokemons([...data])
      setLoading(false);
    }
    const getPokemon = async(res)=>{
    let array = [];
      await res.map(async(item) => {
          const result = await axios.get(item.url);
          array.push(result.data)
     
        
      });
      setPokemons(array)
     
    }
  
    useEffect(()=>{
       
     
        pokeFun();
        console.log(nextUrl)
    },[url]);
    useEffect(()=>{

    },[loading])
  return (
    <>
    { true?(
      <>

    <button className="fixed left-1/4 md:left-auto top-2 font-mono p-1 bg-cyan-600 rounded text-black  hover:bg-zinc-600 hover:scale-125  hover:text-white font-bold" onClick={()=>{setUrl(previousUrl)}}>Anterior</button>
    <button className="fixed top-12 left-1/4 md:mb-0 md:top-2  p-1 font-mono bg-cyan-600 rounded text-black hover:bg-zinc-600 hover:scale-125 hover:text-white font-bold" onClick={()=>{ nextUrl=='https://pokeapi.co/api/v2/pokemon?offset=1260&limit=20' ? 0 :setUrl(nextUrl)}}>Siguiente</button>
    

<button data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="block focus:ring-4 focus:outline-none focus:ring-blue-300   text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 fixed top-2 left-0 md:left-2/4  bg-cyan-600 rounded text-black  hover:bg-zinc-600 hover:scale-125  hover:text-white font-bold" type="button">
  <span className="hidden md:inline-block">Buscar pokemon</span>
  <span className="w-4 text-xl inline-block md:hidden">🔍</span>
</button>
<button id="more-info-button" onClick={()=>{ document.getElementById('more-info').classList.toggle('hidden') }} className="animate-pulse md:animate-none top-16 z-50 left-0 group fixed md:left-3/4 md:top-2 bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">
  
  <span className="hidden md:inline-block">Más información</span>
  
  <img className="hidden md:inline-block  group-hover:animate-ping" src="./assets/pokebola-3dded3cd.png" type="image/png+xml" width={20}></img><p className="text-xs hidden md:inline-block">Image By Nikita Golubev</p>
  
  <span className="inline-block  text-xl md:hidden ">📓</span>

</button>

<div id="defaultModal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative w-full max-w-2xl max-h-full">
     
        <div className="relative bg-zinc-700 rounded-lg shadow dark:bg-gray-700">
           
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-rose-400 dark:text-white">
                    Buscar
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="p-6 space-y-6">
                
<form onSubmit={(e)=>{e.preventDefault()}}>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-mono font-bold" placeholder="Search Mockups, Logos..." value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
         onClick={()=>{setValuePoke(search.toLowerCase());setMsg('Cargando...')}}>Search</button>
    </div>
    <p className="text-lime-400">{msg}</p>
</form>

            </div>
            
        </div>
    </div>
</div>

      <PokeContext.Provider value={{pokemons,valuepoke,responseSearch}}>{props.children} </PokeContext.Provider>
    </>):(<h1>Loading ... </h1>)}
      </>
  );
}
