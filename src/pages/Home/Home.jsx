import React from 'react';

import './style.css';
import DeckList from '../../components/DeckList';
import CreateDeck from '../../components/CreateDeck';

const Home = () => {
    return (
        <div className="home">
            <CreateDeck />
            <section className="c-DeckPresentation">
                <h1>Meus baralhos</h1>
            </section>
            <DeckList />
        </div>
    );
};

export default Home;
