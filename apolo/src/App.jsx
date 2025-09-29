import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Catalogo from "./components/Catalogo/Catalogo";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php")
      .then((response) => {
        setCards(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {loading ? <p>Carregando...</p> : <Catalogo cards={cards} searchTerm={searchTerm} />}
    </>
  );
}

export default App;