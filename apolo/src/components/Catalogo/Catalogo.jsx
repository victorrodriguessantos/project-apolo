import React, { useState } from "react";
import Styles from "./Catalogo.module.css";

function Catalogo({ cards, searchTerm, selectedArchetype, selectedRarity }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCard, setSelectedCard] = useState(null);
  const cardsPerPage = 24;

  const filteredCards = cards.filter((card) => {
    const matchesSearch = card.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesArchetype = selectedArchetype ? card.archetype === selectedArchetype : true;
    const matchesRarity = selectedRarity
      ? card.card_sets?.some(set => set.set_rarity_code === selectedRarity)
      : true;

    return matchesSearch && matchesArchetype && matchesRarity;
  });

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
        <div key={card.id} className={Styles.card} onClick={() => setSelectedCard(card)}>
          <h1>{card.name}</h1>
          <img src={card.card_images[0].image_url} alt={`Carta ${card.name}`} />
          <div className={Styles.cardInfo}>
            <p className={Styles.cardtype}>{card.type}</p>
            <p className={Styles.cardHumanread}>{card.humanReadableCardType}</p>
          </div>
        </div>
      ))}

      <div className={Styles.pagination}>
        <button onClick={prevPage} disabled={currentPage === 1}>← Anterior</button>
        <span>Página {currentPage} de {totalPages}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>Próxima →</button>
      </div>

      {/* Modal */}
      {selectedCard && (
        <div className={Styles.modalOverlay} onClick={() => setSelectedCard(null)}>
          <div className={Styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedCard.card_images[0].image_url_small}
              alt={selectedCard.name}
              className={Styles.modalImage}
            />
            <div className={Styles.modalDetails}>
              <h2>{selectedCard.name}</h2>
              <p><strong>Type:</strong> {selectedCard.type}</p>
              <p><strong>Frame Type:</strong> {selectedCard.frameType}</p>
              <p><strong>Card Type:</strong> {selectedCard.humanReadableCardType}</p>
              <p><strong>Description:</strong> {selectedCard.desc}</p>
              <p><strong>Archetype:</strong> {selectedCard.archetype || "—"}</p>
              {selectedCard.card_sets?.map((set, index) => (
                <div key={index}>
                  <p><strong>Set Name:</strong> {set.set_name}</p>
                  <p><strong>Rarity:</strong> {set.set_rarity}</p>
                  <p><strong>Rarity Code:</strong> {set.set_rarity_code}</p>
                </div>
              ))}
            </div>
            <button className={Styles.closeButton} onClick={() => setSelectedCard(null)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Catalogo;