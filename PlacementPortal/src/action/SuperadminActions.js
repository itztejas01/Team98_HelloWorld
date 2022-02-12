import {COMPANY_CHECKBOX_CHANGED, COMPANY_NAME_TEXT_FIELD_CHANGED} from './actionType';
import axios from 'axios';
import { Value } from 'react-native-reanimated';

export const companyNameTextChanged = value => {
  return {
    type: COMPANY_NAME_TEXT_FIELD_CHANGED,
    payload: value,
  };
};

export const companyCheckboxChanged = value => {
    return {
        type: COMPANY_CHECKBOX_CHANGED,
        payload: !(value),
    };
};
