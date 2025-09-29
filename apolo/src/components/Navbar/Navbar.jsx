import Styles from "./Navbar.module.css";

function Navbar({
  searchTerm,
  setSearchTerm,
  cards,
  selectedArchetype,
  setSelectedArchetype,
  selectedRarity,
  setSelectedRarity
}) {
  const archetypes = [...new Set(cards.map(card => card.archetype).filter(Boolean))];
  const rarities = [...new Set(
    cards.flatMap(card => card.card_sets?.map(set => set.set_rarity_code)).filter(Boolean)
  )];

  return (
    <div className={Styles.containerNavbar}>
      <nav className={Styles.bodyNavbar}>
        <img src="../src/assets/apolo-logo.png" alt="Logo" width="150px" />
        <input
          className={Styles.inputSearch}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="search"
          placeholder="Buscar Carta"
        />

        {/* Filtro por Archetype */}
        <select value={selectedArchetype} onChange={(e) => setSelectedArchetype(e.target.value)}>
          <option value="">Todos os Arquétipos</option>
          {archetypes.map((type, index) => (
            <option key={index} value={type}>{type}</option>
          ))}
        </select>

        {/* Filtro por Rarity */}
        <select value={selectedRarity} onChange={(e) => setSelectedRarity(e.target.value)}>
          <option value="">Todas as Raridades</option>
          {rarities.map((rarity, index) => (
            <option key={index} value={rarity}>{rarity}</option>
          ))}
        </select>

        <h1>YuGiOh Cards</h1>
      </nav>
    </div>
  );
}


export default Navbar;