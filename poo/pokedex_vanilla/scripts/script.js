const ColorType = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

let allFirstGenerationPokemons = [];

const pokemonsList = document.querySelector(".pokemons-list");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-pokemon");

const createPokemonCard = async (pokemon, pokemonIndex) => {
  try {
    const response = await fetch(pokemon.url);
    const pokemonData = await response.json();

    //? Pokemon Card
    const pokemonCard = document.createElement("li");
    pokemonCard.setAttribute("class", "pokemon-card");
    pokemonCard.style.background =
      ColorType[pokemonData.types[0].type.name];
    pokemonCard.addEventListener("click", () => {
      // console.log("teste:", document.location.href);
      window.location.href =
        document.location.href +
        "pages/pokemon_details.html?id=" +
        pokemonData.id;
    });

    //? Pokemon Image
    const pokemonImageContainer = document.createElement("div");
    const pokemonImage = document.createElement("img");
    pokemonImage.src = pokemonData.sprites.front_default;
    pokemonImage.alt = "Pokemon picture";
    pokemonImageContainer.appendChild(pokemonImage);

    //? Pokemon Data
    const pokemonDataContainer = document.createElement("div");
    const pokemonName = document.createElement("h6");
    pokemonName.innerText = `${pokemonData.id} - ${pokemon.name}`;
    pokemonDataContainer.appendChild(pokemonName);

    //? Append Containers
    pokemonCard.appendChild(pokemonImageContainer);
    pokemonCard.appendChild(pokemonDataContainer);

    pokemonsList.appendChild(pokemonCard);
  } catch (error) {}
};

const getAllPokemons = async () => {
  await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(async (response) => {
      const apiData = await response.json();

      allFirstGenerationPokemons = apiData.results;

      await Promise.all(
        apiData.results.forEach(async (pokemon, index) => {
          await createPokemonCard(pokemon, index);
        })
      );
    })
    .catch((err) => console.log(err));
};

window.addEventListener("load", function () {
  getAllPokemons();
});

searchBtn.addEventListener("click", async () => {
  const searchName = searchInput.value.toLowerCase();

  if (searchName.length > 0) {
    const searchedPokemon = allFirstGenerationPokemons.filter(
      (pokemon) => pokemon.name.includes(searchName)
    );

    if (searchedPokemon.length > 0) {
      pokemonsList.innerHTML = "";

      await Promise.all(
        searchedPokemon.forEach(async (pokemon, index) => {
          await createPokemonCard(pokemon);
        })
      );
      // createPokemonCard(searchedPokemon);
    } else {
      window.alert("Nenhum pokemon encontrado");
    }
  } else {
    pokemonsList.innerHTML = "";

    await Promise.all(
      allFirstGenerationPokemons.forEach(async (pokemon, index) => {
        await createPokemonCard(pokemon);
      })
    );
  }
});

searchInput("change");
