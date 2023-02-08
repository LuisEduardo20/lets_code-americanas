export const PokemonServices = {
  async getPokemonData(pokemonName: string): Promise<void> {
    const teste = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
  },
};
