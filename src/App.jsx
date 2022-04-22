import React from 'react';
import AddWord from './Components/AddWord';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './global.css';
import Deck from './Components/Deck';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import Home from './Pages/Home/Home';
import ViewDeck from './Pages/ViewDeck/ViewDeck';

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/decks/:id" element={<ViewDeck />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
