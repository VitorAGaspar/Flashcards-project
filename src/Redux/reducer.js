const INITIAL_STATE = [];

const DeckReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_CARD': {
            return [...state, action.payload];
        }
        default:
            return state;
    }
};

export default DeckReducer;
