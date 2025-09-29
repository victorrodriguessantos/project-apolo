import Styles from "./Catalogo.module.css";

function Catalogo({ cards, searchTerm }) {
  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={Styles.containerCard}>
      {filteredCards.slice(0, 20).map((card) => (
        <div key={card.id} className={Styles.card}>
          <h1>{card.name}</h1>
          <img src={card.card_images[0].image_url} alt={card.name} />
          <div className={Styles.cardInfo}>
            <p className={Styles.cardtype}>{card.type}</p>
            <p className={Styles.cardHumanread}>{card.humanReadableCardType}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Catalogo;