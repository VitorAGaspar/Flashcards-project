import { useState } from 'react';
import './style.css';

const AddWord = () => {
    const [flip, setFlip] = useState(false);
    const [inputWord, setInputWord] = useState({
        word: '',
        definition: '',
    });
    const [deck, setDeck] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setDeck((deck) => [...deck, inputWord]);
        setInputWord({ word: '', definition: '' });
    };

    return (
        <div>
            <div className="c-add">
                <form onSubmit={(e) => handleSubmit(e)} className="c-form">
                    <input
                        className="c-form__input"
                        type="text"
                        placeholder="Insira uma palavra"
                        value={inputWord.word}
                        onChange={(e) =>
                            setInputWord((prev) => {
                                return { ...prev, word: e.target.value };
                            })
                        }
                    />
                    <input
                        className="c-form__input"
                        type="text"
                        placeholder="Insira a definição"
                        value={inputWord.definition}
                        onChange={(e) =>
                            setInputWord((prev) => {
                                return {
                                    ...prev,
                                    definition: e.target.value,
                                };
                            })
                        }
                    />
                    <button type="submit">Click</button>
                </form>
            </div>
            <section className="c-deck__section">
                {deck.map((e, i) => {
                    return (
                        <section
                            onClick={() => setFlip(() => !flip)}
                            className="c-deck__card"
                            key={i}
                        >
                            {flip ? <p>{e.definition}</p> : <p>{e.word}</p>}
                        </section>
                    );
                })}
            </section>
        </div>
    );
};

export default AddWord;
