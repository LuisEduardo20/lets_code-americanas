// let allFirstGenerationPokemonsCopy = null;
let allFirstGenerationPokemons = null;

const pokemonsList = document.querySelector(".pokemons-list");

const getAllPokemons = async () => {
  await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(async (response) => {
      const apiData = await response.json();

      // console.table(apiData.results);

      allFirstGenerationPokemons = apiData.results;

      await Promise.all(
        apiData.results.forEach(async (pokemon, index) => {
          const response = await fetch(pokemon.url);
          const pokemonData = await response.json();

          // console.log("pokemonData:", pokemonData);

          const pokemonCard = document.createElement("li");
          pokemonCard.setAttribute("class", "pokemon-card");

          const pokemonImageContainer = document.createElement("div");
          const pokemonImage = document.createElement("img");
          pokemonImage.src = pokemonData.sprites.front_default;
          pokemonImage.alt = "Pokemon picture";
          pokemonImageContainer.appendChild(pokemonImage);

          const pokemonDataContainer = document.createElement("div");
          const pokemonName = document.createElement("h6");
          pokemonName.innerText = pokemon.name;
          pokemonDataContainer.appendChild(pokemonName);

          pokemonCard.appendChild(pokemonImageContainer);
          pokemonCard.appendChild(pokemonDataContainer);

          pokemonsList.appendChild(pokemonCard);
        })
      );
    })
    .catch((err) => console.log(err));
};

const searchPokemon = getAllPokemons();

// console.log(
//   "allFirstGenerationPokemons:",
//   allFirstGenerationPokemons
// );
