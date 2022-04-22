const INITIAL_STATE = [
    {
        id: 1,
        nome: 'Inglês',
        cartas: []
    },
    {
        id: 2,
        nome: 'Espanhol',
        cartas: []
    },
    {
        id: 3,
        nome: 'Fórmulas de Física',
        cartas: []
    }
];

const DeckReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_DECK': {
            return [...state, action.payload];
        }

        case 'ADD_CARD': {
            const deckFiltered = state.find((e) => e.id === action.id);
            if (deckFiltered) {
                const newState = {
                    ...deckFiltered,
                    cartas: [...deckFiltered.cartas, action.payload]
                };
                state[action.id - 1] = newState;
            }
        }

        default:
            return state;
    }
};

export default DeckReducer;
