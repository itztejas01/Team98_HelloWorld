import axios from "axios";
import { CERTIFICATE_AUTHENTICATION_TEXT_CHANGED, CERTIFICATION_AUTHORITY_TEXT_CHANGED, CERTIFICATION_NAME_TEXT_CHANGED, EXPERIENCE_COMPANY_NAME_TEXT_CHANGED, EXPERIENCE_JOB_DESCRIPTION_TEXT_CHANGED, EXPERIENCE_WORKING_TEXT_CHANGED } from "./actionType";

export const certificationNameTextChanged = value => {
    return {
        type: CERTIFICATION_NAME_TEXT_CHANGED,
        payload: value
    }
}

export const certificationAuthorityTextChanged = value => {
    return {
        type: CERTIFICATION_AUTHORITY_TEXT_CHANGED,
        payload: value
    }
}

export const certificationAuthenticationTextChanged = value => {
    return {
        type: CERTIFICATE_AUTHENTICATION_TEXT_CHANGED,
        payload: value
    }
}

export const experienceCompanyNameTextChanged = value => {
    return {
        type: EXPERIENCE_COMPANY_NAME_TEXT_CHANGED,
        payload: value,
    }
}

export const experienceJobDescriptionTextChanged = value => {
    return {
        type: EXPERIENCE_JOB_DESCRIPTION_TEXT_CHANGED,
        payload: value,
    }
}

export const experienceWorkingTextChanged = value => {
    return {
        type: EXPERIENCE_WORKING_TEXT_CHANGED,
        payload: value,
    }
}