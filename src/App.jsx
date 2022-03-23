import React from 'react';
import AddWord from './Components/AddWord';
import './global.css';
import Deck from './Components/Deck';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
const App = () => {
    return (
        <Provider store={store}>
            <AddWord />
            <Deck />
        </Provider>
    );
};

export default App;
