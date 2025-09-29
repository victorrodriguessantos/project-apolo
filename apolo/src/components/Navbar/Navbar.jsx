import Styles from "./Navbar.module.css";
import React, { useState } from "react";
import Catalogo from "../Catalogo/Catalogo";

const SearchCard = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const items = Catalogo.cards;
    const filteredItems = items.filter((item) => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

}

function Navbar({ searchTerm, setSearchTerm }) {
  return (
    <div className={Styles.containerNavbar}>
      <nav className={Styles.bodyNavbar}>
        <img src="../src/assets/apolo-logo.png" alt="" width="150px" />
        <input
          className={Styles.inputSearch}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="search"
          placeholder="Buscar Carta"
        />
        <h1>Seja bem vindo!</h1>
      </nav>
    </div>
  );
}


export default Navbar;