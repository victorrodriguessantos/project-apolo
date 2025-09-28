import Styles from "./Catalogo.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";


function Catalogo() {

    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        axios.get("https://hydralinks.cloud/sources/xatab.json")
        .then(
            (response) => {
                setGames(response.data.downloads);
                console.log(response.data.dowmnloads);
                setLoading(false);
            }
        ).catch((
            error) => {
            console.error(error);
        });
    },[]);

    if (loading) {
        return <p>Carregando...</p>;
    }

    return (
        <div>
            {games.map((game, index) => (
            <div key={index} className={Styles.card}>
                <h2>{game.title}</h2>
            </div>
            ))}
            <h1>Teste</h1>
        </div>
        );

}

export default Catalogo;