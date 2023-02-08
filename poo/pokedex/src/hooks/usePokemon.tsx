import React, { createContext, useContext, useState } from "react";

type PokemonContextProps = {
  pokemonsList: unknown[];
  setPokemonsList: any;
};

const PokemonContext = createContext({} as PokemonContextProps);

const PokemonProvider = () => {
  const [pokemonsList, setPokemonsList] = useState<unknown[]>([]);

  return (
    <PokemonContext.Provider
      value={{
        pokemonsList,
        setPokemonsList,
      }}
    ></PokemonContext.Provider>
  );
};

const usePokemon = () => {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error(
      "Pokemon context must be used with PokemonProvider"
    );
  }

  return context;
};

export default usePokemon;
