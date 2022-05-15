import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { AddCard } from '../../Redux/actions';

import './style.css';

const CreateCard = ({ id }) => {
    const Dispatch = useDispatch();
    const [inputWord, setInputWord] = useState({
        word: '',
        definition: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        Dispatch(AddCard(id, inputWord));
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
                                    definition: e.target.value
                                };
                            })
                        }
                    />
                    <button type="submit">Adicionar</button>
                </form>
            </div>
        </div>
    );
};

export default CreateCard;
