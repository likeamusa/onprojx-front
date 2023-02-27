import {  all, takeLatest, call, put, select } from 'redux-saga/effects'; 
import { updateProjeto } from './actions';
import types from './types';
import api from '../../../services/api';

export function* allProjetos() {
    try {
        const {data: res} = yield call(api.get, '/projetos');

        if (res.error) {
            alert(res.error);
            return false;
        }

        yield put(updateProjeto({projetos: res}));
    }
    catch (err) {
        alert(err.message)
    }
}

export default all([takeLatest(types.ALL_PROJETOS, allProjetos)]);