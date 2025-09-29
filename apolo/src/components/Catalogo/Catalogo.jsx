import React, { useState } from "react";
import Styles from "./Catalogo.module.css";

function Catalogo({ cards, searchTerm }) {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 24;

  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className={Styles.containerCard}>
      {currentCards.map((card) => (
        <div key={card.id} className={Styles.card}>
          <h1>{card.name}</h1>
          <img src={card.card_images[0].image_url} alt={card.name} />
          <div className={Styles.cardInfo}>
            <p className={Styles.cardtype}>{card.type}</p>
            <p className={Styles.cardHumanread}>{card.humanReadableCardType}</p>
          </div>
        </div>
      ))}

      <div className={Styles.pagination}>
        <button onClick={prevPage} disabled={currentPage === 1}>
          ← Anterior
        </button>
        <span>Página {currentPage} de {totalPages}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Próxima →
        </button>
      </div>
    </div>
  );
}

export default Catalogo;