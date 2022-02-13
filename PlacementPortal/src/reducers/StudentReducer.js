import { CERTIFICATE_AUTHENTICATION_TEXT_CHANGED, CERTIFICATION_AUTHORITY_TEXT_CHANGED, CERTIFICATION_NAME_TEXT_CHANGED, EXPERIENCE_COMPANY_NAME_TEXT_CHANGED, EXPERIENCE_JOB_DESCRIPTION_TEXT_CHANGED, EXPERIENCE_WORKING_TEXT_CHANGED } from "../action/actionType";

var INITIAL_STATE = {
    certification_name: "",
    certification_authority: "",
    certificate_authentication_number: "",
    experience_comapny_name: "", 
    experience_job_desp: "",
    experience_working_years: "",
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CERTIFICATION_NAME_TEXT_CHANGED:
            return {...state, certification_name: action.payload};
        case CERTIFICATION_AUTHORITY_TEXT_CHANGED:
            return {...state, certification_authority: action.payload};
        case CERTIFICATE_AUTHENTICATION_TEXT_CHANGED:
            return {...state, certificate_authentication_number: action.payload};
        case EXPERIENCE_COMPANY_NAME_TEXT_CHANGED:
            return {...state, experience_company_name: action.payload};
        case EXPERIENCE_JOB_DESCRIPTION_TEXT_CHANGED:
            return {...state, experience_job_desp: action.payload};
        case EXPERIENCE_WORKING_TEXT_CHANGED:
            return {...state, experience_working_years: action.payload};
        default:
            return state;
}
};