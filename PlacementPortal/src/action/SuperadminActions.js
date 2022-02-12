import {COMPANY_NAME_TEXT_FIELD_CHANGED} from './actionType';
import axios from 'axios';

export const companyNameTextChanged = value => {
  return {
    type: COMPANY_NAME_TEXT_FIELD_CHANGED,
    payload: value,
  };
};
