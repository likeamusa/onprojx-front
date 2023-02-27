import types from './types';
import produce from 'immer';
const INITIAL_STATE = {
    atividades: [],
};

function atividade(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.UPDATE_ATIVIDADE: {
            return produce(state, draft => {
                draft.atividades = action.atividades;
            });
        }
        default: 
            return state;
    }
} 

export default atividade;