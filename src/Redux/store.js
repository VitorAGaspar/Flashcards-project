import { createStore } from 'redux';
import DeckReducer from './reducer';

export const store = createStore(DeckReducer);
