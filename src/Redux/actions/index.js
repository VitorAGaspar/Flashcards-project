import types from '../actionsTypes/types';

export function AddCard(id, payload) {
    return { type: types.ADD_CARD, payload, id };
}

export function DeleteDeck(id) {
    return { type: types.DELETE_DECK, id };
}
