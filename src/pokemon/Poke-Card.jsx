

export function PokeCard({pokemon,infoPokemon}){


    return (
        <div className="flex flex-col md:flex-row bg-red-400/80 hover:bg-red-500 rounded-lg mr-2 mb-2" onClick={()=>{infoPokemon(pokemon);document.getElementById('more-info').classList.remove('hidden')}}>
            <img  src={pokemon.sprites.front_default} className="w-32 m-auto md:m-0 md:w-auto"  alt="" />
            <h1 className="border-t-4  md:border-l-4 md:border-t-0 border-zinc-700 text-2xl p-8 ">
                {pokemon.name}</h1>
        </div>



    );


}