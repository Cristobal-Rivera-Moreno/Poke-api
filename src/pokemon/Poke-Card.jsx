

export function PokeCard({pokemon,infoPokemon}){


    return (
        <div className="flex row bg-red-400 hover:bg-red-500 rounded-lg mr-2 mb-2" onClick={()=>{infoPokemon(pokemon);document.getElementById('more-info').classList.remove('hidden')}}>
            <img  src={pokemon.sprites.front_default}  alt="" />
            <h1 className="border-l-4 border-zinc-700 text-2xl p-8 ">
                {pokemon.name}</h1>
        </div>



    );


}