import React from 'react';
import Card from '../Card';
import './style.css';
import { useSelector } from 'react-redux';

const Deck = () => {
    const deck = useSelector((state) => state);

    return (
        <>
            <div className="c-card">
                {deck.map((e, i) => (
                    <Card word={e.word} definition={e.definition} />
                ))}
            </div>
        </>
    );
};

export default Deck;
