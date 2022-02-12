import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import SuperAdminReducer from './SuperAdminReducer';

export default combineReducers({
    login: LoginReducer,
    superAdmin: SuperAdminReducer,
})
