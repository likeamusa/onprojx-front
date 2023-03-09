import {  all, takeLatest, call, put } from 'redux-saga/effects'; 
import { updateProjeto, createProjectSuccess, createProjectError } from './actions';
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

export function* createProject(project) {
    console.log(project.payload);
    try {
        const {data: res} = yield call(api.post, '/projeto', project.payload);
        yield put(createProjectSuccess(res));
        console.log(res);

        yield put(updateProjeto({projetos: res}));

    }
    catch (err) {
        yield put(createProjectError({error: err.message}));
    }

}



export default all([takeLatest(types.ALL_PROJETOS, allProjetos, createProject), takeLatest(types.CREATE_PROJECT, createProject)]);