import { useState } from "react";

import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import "./styles/style.css";

function App() {
  return (
    <div className='page'>
      <Header />
      <PokemonList />
    </div>
  );
}

export default App;
