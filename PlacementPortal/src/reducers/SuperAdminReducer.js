import { COMPANY_NAME_TEXT_FIELD_CHANGED } from "../actions/ActionTypes";

var INITIAL_STATE = {
    total_students: 20,
    total_companies: 30,
    total_jobs: 50,
    new_company_name: "",
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case COMPANY_NAME_TEXT_FIELD_CHANGED:
            return{...state, new_company_name: action.payload};
        default:
            return state;
    }
}