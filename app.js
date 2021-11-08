
const pokeContainer =document.querySelector(`#container`); 
// Number of Pokemon (AKA Objects) in the PokeAPI
const numOfPokemon=150; 

// The createPokeCard function creates a new card- section element- ajd adds the new card to the webpage/document inside of the dive with the id of "container"
function createPokeCard(pokemon){
    const pokeCard=document.createElement(`section`); 
    pokeCard.classList.add(`pokemon`);
    pokeContainer.append(pokeCard); 
    // Setting the innerHTML for the new card using the data/object that is passed into the "pokemon" parameter.
    pokeCard.innerHTML= 
    `<div class='img=container'>
        <img src="${pokemon.data.sprites.front_shiny}" alt="${pokemon.data.name}">
    </div>
    <h3 class="name">${pokemon.data.name.toUpperCase}</h3>
    `;
}
