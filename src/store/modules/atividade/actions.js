import types from './types';

export function filterAtividades(start, end) {
    return {
        type: types.FILTER_ATIVIDADES,
        start,
        end
    };
}

export function updateAtividades(atividades) {
    return {
        type: types.UPDATE_ATIVIDADES,
        atividades
    };
}