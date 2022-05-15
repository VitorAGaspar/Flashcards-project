import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CreateWord from '../../Components/CreateCard';
import Card from '../../Components/Card';
import './style.css';

const ViewDeck = () => {
    const currentDeck = useSelector((state) => state.DeckReducer);
    const { id } = useParams();
    const idNumber = parseInt(id);
    console.log('idNumber:', id);

    return (
        <>
            <div className="c-card__section">
                {currentDeck.map((deck) =>
                    deck.id === idNumber ? (
                        <div className="c-viewdeck__wrapper">
                            <div>
                                <CreateWord id={idNumber} />
                            </div>
                            <div className="c-card__wrapper">
                                {deck.cartas.map((carta) => (
                                    <div>
                                        <Card
                                            word={carta.word}
                                            definition={carta.definition}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        console.log(deck.id)
                    )
                )}
            </div>
        </>
    );
};

export default ViewDeck;
