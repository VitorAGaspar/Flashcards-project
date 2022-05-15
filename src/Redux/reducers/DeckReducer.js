import produce from 'immer';

const INITIAL_STATE = [];

const DeckReducer = (state = INITIAL_STATE, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case 'ADD_DECK': {
                console.log(action.id)
                draft.push(action.payload);
                return draft;
            }

            case '@card/ADD_CARD': {
                const id = action.id;
                draft.map(
                    (obj) => obj.id == id && obj.cartas.push(action.payload)
                );
                return draft;
            }

            case '@deck/DELETE_DECK': {
                const id = action.id;
                console.log(id);
                draft = draft.filter((obj) => obj.id !== id);
                return draft;
            }
            default:
                return state;
        }
    });
};

export default DeckReducer;
