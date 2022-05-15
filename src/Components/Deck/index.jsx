import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { DeleteDeck } from '../../redux/actions';

import './style.css';

const Deck = ({ id, nome, cartas }) => {
    const Navigate = useNavigate();
    const Dispatch = useDispatch();
    const deleteDeck = (id) => {
        Dispatch(DeleteDeck(id));
    };

    return (
        <section className="c-deck" key={id}>
            <h1
                className="c-deck__name"
                onClick={() => Navigate(`/decks/${id}`)}
            >
                {nome}
            </h1>
            <h3 className="c-deck__length"> {cartas.length} cartas</h3>
            <button className="c-button__delete" onClick={() => deleteDeck(id)}>
                Apagar
            </button>
        </section>
    );
};

export default Deck;
