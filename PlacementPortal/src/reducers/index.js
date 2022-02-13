import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import StudentReducer from './StudentReducer';
import SuperAdminReducer from './SuperAdminReducer';

export default combineReducers({
    login: LoginReducer,
    superAdmin: SuperAdminReducer,
    student: StudentReducer,
})
