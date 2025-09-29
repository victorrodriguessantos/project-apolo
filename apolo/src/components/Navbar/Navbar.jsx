import Styles from "./Navbar.module.css";

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