import { combineReducers } from 'redux';

import projeto from './modules/projeto/reducer';
import atividade from './modules/atividade/reducer';

export default combineReducers({
     projeto,
     atividade
}); 