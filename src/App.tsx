import React from 'react';
import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";
import PokemonList from "./containers/pokemonList";
import PokemonDetails from "./containers/pokemonDetails";
import Navbar from "./components/navbar";

function App() {
    return (
        <div>
            <Navbar />
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<PokemonList/>}/>
                    <Route path="/pokemon/:id" element={<PokemonDetails/>}/>
                </Routes>
            </div>
        </div>
  );
}

export default App;
