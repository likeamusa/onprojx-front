import produce from 'immer';
import types from "./types";

const INITIAL_STATE = {
    behavior: 'add', // add or edit
    components: {
        drawer: false,
        modal: false,
    },
    form: {
        loading: false,
        disabled: false,
        
    },
    projetos: [],
    project: {
        project: 0,
        local: '',
        region: '',
        description: '',
        type: '',
        start_date: '',
        deadline_date: '',
        status: ''
        }
    ,

    create_project: [],
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
        case types.CREATE_PROJECT_SUSCCESS: {
            return produce(state, draft => {
                draft = { ...draft, ...action.project };
                return draft;           
            });
        }
        case types.CREATE_PROJECT_ERROR: {
            return produce(state, draft => {
                draft = { ...draft, ...action.error };
                return draft;
            });
        }

        default: 
            return state;
    }
} 

export default projeto;