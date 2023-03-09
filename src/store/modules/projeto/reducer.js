import produce from 'immer';
import types from "./types";

const INITIAL_STATE = {
    projetos: [],
};

function projeto(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.UPDATE_PROJETO: {
            return produce(state, draft => {
                draft = { ...draft, ...action.projetos };
                return draft;
            });
        }
        case types.CREATE_PROJECT: {
            return produce(state, draft => {
                draft = { ...draft, ...action.projetos };
                return draft;
            });
        }
        default: 
            return state;
    }
} 

export default projeto;