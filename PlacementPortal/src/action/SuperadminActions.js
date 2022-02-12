import {
  COMPANY_NAME_TEXT_FIELD_CHANGED,
  USERNAME_TYPE_CHANGED,
  PASSWORD_TYPE_CHANGED,
  USERTYPE_NAME_CHANGED,
  USERTYPE_KEY_CHANGED,
} from './actionType';
import axios from 'axios';

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