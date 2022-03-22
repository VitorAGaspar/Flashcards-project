import React from 'react';
import Card from '../Card';
import './style.css';

const Deck = () => {
    const data = [
        {
            word: 'Word',
            definition: 'Palavra',
        },
        {
            word: 'Faucet',
            definition: 'Torneira',
        },
        {
            word: 'Green',
            definition: 'Verde',
        },
        {
            word: 'Bus',
            definition: 'Ônibus',
        },
        {
            word: 'Cry',
            definition: 'Chorar',
        },
        {
            word: 'Run',
            definition: 'Correr',
        },
        {
            word: 'Eat',
            definition: 'Comer',
        },
    ];

    return (
        <>
            <div className="c-card">
                {data.map((e, i) => (
                    <Card word={e.word} definition={e.definition} />
                ))}
            </div>
        </>
    );
};

export default Deck;
