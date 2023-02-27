import { all, takeLatest, call, put } from 'redux-saga/effects';
import types from './types';
import api from '../../../services/api';
import { updateAtividade } from './actions';

export function* filterAtividade({ start, end }) {
    try {
        const {data: res} = yield call(api.post, '/atividades', {
            start,
            end
        });

        if (res.error) {
            alert(res.error);
        }

        yield put(updateAtividade(res));

    } catch (err) {
        alert(err.message)
    }
}

export default all([takeLatest(types.FILTER_ATIVIDADES, filterAtividade)]);