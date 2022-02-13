import { CERTIFICATE_AUTHENTICATION_TEXT_CHANGED, CERTIFICATION_AUTHORITY_TEXT_CHANGED, CERTIFICATION_NAME_TEXT_CHANGED } from "../action/actionType";

var INITIAL_STATE = {
    certification_name: "",
    certification_authority: "",
    certificate_authentication_number: "",
};
  
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CERTIFICATION_NAME_TEXT_CHANGED:
            return {...state, certification_name: action.payload};
        case CERTIFICATION_AUTHORITY_TEXT_CHANGED:
            return {...state, certification_authority: action.payload};
        case CERTIFICATE_AUTHENTICATION_TEXT_CHANGED:
            return {...state, certificate_authentication_number: action.payload};
        default:
            return state;
}
};