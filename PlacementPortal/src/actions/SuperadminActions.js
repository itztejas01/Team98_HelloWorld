import axios from "axios";
import { COMPANY_NAME_TEXT_FIELD_CHANGED } from "./ActionTypes";

export const companyNameTextChanged = value => {
    return{
        type: COMPANY_NAME_TEXT_FIELD_CHANGED,
        payload: value,
    }
}