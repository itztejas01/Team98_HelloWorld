import { PASSWORD_TEXTFIELD_CHANGED, USERNAME_TEXT_FIELD_CHANGED,TOGGLE_LOGIN_LOADER } from "../actions/ActionTypes";

var INITIAL_STATE = {
    login_username: "",
    login_password: "",
    user_id: "",
    user_name: "",
    login_loader:false,
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch(action.type) {
        case USERNAME_TEXT_FIELD_CHANGED:
            return {...state, login_username: action.payload};
        case PASSWORD_TEXTFIELD_CHANGED:
            return{...state, login_password: action.payload};
        case TOGGLE_LOGIN_LOADER:
            return {...state,login_loader:action.payload};
        default:
            return state;
    }
}
