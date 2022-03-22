import React, { useState } from 'react';
import './style.css';

const Card = ({ word, definition }) => {
    const [flip, setFlip] = useState(false);
    return (
        <React.Fragment>
            <section className="c-deck__card" onClick={() => setFlip(!flip)}>
                {!flip ? <p>{word}</p> : <p>{definition}</p>}
            </section>
        </React.Fragment>
    );
};

export default Card;
