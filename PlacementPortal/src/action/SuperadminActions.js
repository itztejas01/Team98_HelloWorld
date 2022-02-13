import {
  COMPANY_NAME_TEXT_FIELD_CHANGED,
  USERNAME_TYPE_CHANGED,
  PASSWORD_TYPE_CHANGED,
  USERTYPE_NAME_CHANGED,
  USERTYPE_KEY_CHANGED,
} from './actionType';
import {COMPANY_CHECKBOX_CHANGED, COMPANY_NAME_FOR_JOB_CHANGED, COMPANY_NAME_TEXT_FIELD_CHANGED, JOB_CTC_TEXT_CHANGED, JOB_DESCRIPTION_TEXT_CHANGED, JOB_TITLE_TEXTFIELD_CHANGED} from './actionType';
import axios from 'axios';
import { Value } from 'react-native-reanimated';

export const companyNameTextChanged = value => {
  return dispatch=> {
    dispatch({
    type: COMPANY_NAME_TEXT_FIELD_CHANGED,
    payload: value
  })
  };
};

export const usernameTypeChanged = usernameType => {
  console.log('user name in actiono',usernameType);
  return dispatch=>{
    dispatch({
    type: USERNAME_TYPE_CHANGED,
    payload: usernameType
  })
  };
};

export const passwordTypeChanged = passwordType => {
  return {
    type: PASSWORD_TYPE_CHANGED,
    payload: passwordType
  };
};

export const usertypeNameChanged = usertypeName => {
  return {
    type: USERTYPE_NAME_CHANGED,
    payload: usertypeName
  };
};

export const usertypeKeyChanged = usertypeKey => {
  return {
    type: USERTYPE_KEY_CHANGED,
    payload: usertypeKey
  };
};
export const companyCheckboxChanged = value => {
    return {
        type: COMPANY_CHECKBOX_CHANGED,
        payload: !(value),
    };
};

export const jobTitleTextChanged = value => {
    return {
        type: JOB_TITLE_TEXTFIELD_CHANGED,
        payload: value,
    }
}

export const companyNameForJobChanged = value => {
    return {
        type: COMPANY_NAME_FOR_JOB_CHANGED,
        payload: value,
    }
}

export const jobCTCTextChanged = value => {
    return {
        type: JOB_CTC_TEXT_CHANGED,
        payload: value,
    }
}

export const jobDespTextChanged = value => {
    return {
        type: JOB_DESCRIPTION_TEXT_CHANGED,
        payload: value,
    }
}
