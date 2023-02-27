import {all} from 'redux-saga/effects';

import atividade from './modules/atividade/sagas';
import projeto from './modules/projeto/sagas';

export default function* rootSaga() {
    return yield all([
        atividade,
        projeto
    ]);
}

