import {all} from 'redux-saga/effects';

import atividade from './modules/atividade/sagas';

export default function* rootSaga() {
    return yield all([
        atividade
    ]);
}

