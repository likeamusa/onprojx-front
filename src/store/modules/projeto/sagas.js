import {  all, takeLatest, call, put, select } from 'redux-saga/effects'; 
import { updateProjeto, createProjectError, createProjectSuccess } from './actions';
import types from './types';
import api from '../../../services/api';

export function* allProjetos() {

    const { form } = yield select(state => state.projeto);

    try {

        yield put(updateProjeto({form: {...form, loading: true}}));
        const {data: res} = yield call(api.get, '/projetos');
        
        yield put(updateProjeto({projetos: res}));
        if (res.error) {
            alert(res.error);
            return false;
        }
        
        yield put(updateProjeto({form: {...form, loading: false}}))
    }
    catch (err) {
        yield put(updateProjeto({form: {...form, loading: false}}))
        alert(err.message)
    }
}

export function* createProject(project) {
    console.log(project.payload);
    try {
        const {data: res} = yield call(api.post, '/projeto', project.payload);
        yield put(createProjectSuccess(res));
        console.log(res);

        yield allProjetos();

    }
    catch (err) {
        yield put(createProjectError({error: err.message}));
    }
}



export default all([
    takeLatest(types.ALL_PROJETOS, allProjetos, createProject), 
    takeLatest(types.CREATE_PROJECT, createProject)
]);