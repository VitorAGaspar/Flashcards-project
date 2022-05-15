import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CreateDeck = () => {
    const Dispatch = useDispatch();
    const [createDecks, setCreateDecks] = useState({
        nome: '',
        cartas: []
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        Dispatch({
            type: 'ADD_DECK',
            payload: { ...createDecks, id: Date.now() }
        });
    };

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="deckInput"></label>
                <input
                    type="text"
                    name="deckInput"
                    placeholder="Insira o nome do deck"
                    onChange={(e) =>
                        setCreateDecks({ ...createDecks, nome: e.target.value })
                    }
                />
                <button type="submit">Criar</button>
            </form>
        </>
    );
};

export default CreateDeck;
