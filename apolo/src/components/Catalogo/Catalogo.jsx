import Styles from "./Catalogo.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";


function Catalogo() {

    const [cards, setCard] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php")
        .then(
            (response) => {
                setCard(response.data.data);
                console.log(data.data);
                setLoading(false);
            }
        ).catch((
            error) => {
            console.error(error);
            setLoading(false);
        });
    },[]);

    if (loading) {
        return <p>Carregando...</p>;
    }

    return (
        
        <div className={Styles.containerCard}>
            {cards.slice(0, 20).map((card) => (
                <div className={Styles.card}>
                    <h1>{card.name}</h1>
                    <img src={card.card_images[0].image_url} />
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