import Styles from "./Navbar.module.css";

function Navbar() {
    return (
        <div className={Styles.containerNavbar}>
            <nav className={Styles.bodyNavbar}>
                <img src="../src/assets/apolo-logo.png" alt="" width="150px"/>
                <input 
                className={Styles.inputSearch}
                type-="search" 
                placeholder="Buscar Carta"/>
                <h1>Seja bem vindo!</h1>
            </nav>
        </div>
    )
}

export default Navbar;