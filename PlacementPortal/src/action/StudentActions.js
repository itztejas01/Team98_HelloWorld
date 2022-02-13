import axios from "axios";
import { CERTIFICATE_AUTHENTICATION_TEXT_CHANGED, CERTIFICATION_AUTHORITY_TEXT_CHANGED, CERTIFICATION_NAME_TEXT_CHANGED } from "./actionType";

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