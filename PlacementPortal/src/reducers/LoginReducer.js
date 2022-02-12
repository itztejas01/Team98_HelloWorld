import { PASSWORD_TEXTFIELD_CHANGED, USERNAME_TEXT_FIELD_CHANGED } from "../actions/ActionTypes";

var INITIAL_STATE = {
    login_username: "",
    login_password: "",
    user_id: "",
    user_name: "",
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case USERNAME_TEXT_FIELD_CHANGED:
            return {...state, login_username: action.payload};
        case PASSWORD_TEXTFIELD_CHANGED:
            return{...state, login_password: action.payload};
        default:
            return state;
    }
}
