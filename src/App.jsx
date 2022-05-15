import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './global.css';
import Decks from './Components/DeckList';
import { store, persistor } from './Redux/store';
import { Provider } from 'react-redux';
import Home from './Pages/Home/Home';
import ViewDeck from './Pages/ViewDeck/ViewDeck';
import Header from './Components/Header';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/decks/:id" element={<ViewDeck />} />
                    </Routes>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
};

export default App;
