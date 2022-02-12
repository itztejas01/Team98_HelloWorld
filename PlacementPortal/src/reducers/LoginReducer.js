import { SUPER_ADMIN_LOGIN } from '../actions/actionTypes';

var INITIAL_STATE = {
    super_admin:[],
};

export default (state=INITIAL_STATE, action)=>{
    switch (action.type){
        case SUPER_ADMIN_LOGIN:
            return {...state,super_admin:action.payload}
        default:
            return state;
    }
}

  