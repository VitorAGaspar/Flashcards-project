import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Deck from '../Deck';

import './style.css';

const DeckList = () => {
    const showDecks = useSelector((state) => state.DeckReducer);

    console.log(showDecks);

    return (
        <>
            <section className="c-deck__container">
                {showDecks.length > 0 ? (
                    showDecks.map((deck) => {
                        return <Deck {...deck} />;
                    })
                ) : (
                    <h1>Crie Baralhos para estudar agora mesmo :D!</h1>
                )}
            </section>
        </>
    );
};

export default DeckList;
