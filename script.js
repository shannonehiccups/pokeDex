const pokeContainer = document.querySelector(`#container`); 
const numOfPokemon = 150; 

// This createPokeCard function that actually creates the cards that will be displayed with and area for the image and name of the pokemon.
function createPokeCard(pokemon){
    const pokeCard = document.createElement(`section`);
    pokeCard.classList.add(`pokemon`); 
    pokeContainer.append(pokeCard); 
    pokeCard.innerHTML =`
    <div class = "img-container">
        <img src= "${pokemon.data.sprites.front_shiny}" alt="${pokemon.data.name}">
        </div>
        <h3 class="name">${pokemon.data.name.toUpperCase()}</h3>
        `;
}

// The getPokemonData function makes the Axios get request and passes that information into the createPokeCard function.
async function getPokemonData(id){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemonData = await axios.get(url); 
    console.log(pokemonData); 
    console.log(pokemon.data.sprites.front_shiny);
    console.log(pokemon.data.name);
    createPokeCard(pokemonData);
}


// This getPokemon function loops through the pokemon id's and runs the getPokemonData function for each ID.

async function getPokemon(){
    for(i=1; i<+numOfPokemon; i++){
        console.log(i);
        await getPokemonData(i);
    }
}

getPokemon();
