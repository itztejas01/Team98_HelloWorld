import axios from 'axios';
import {LOGIN_API} from '../extras/APIs';
import {
  PASSWORD_TEXTFIELD_CHANGED,
  USERNAME_TEXT_FIELD_CHANGED,
} from './actionType';

export const usernameTextFieldChanged = value => {
  return {
    type: USERNAME_TEXT_FIELD_CHANGED,
    payload: value,
  };
};

export const passwordTextFieldChanged = value => {
  return {
    type: PASSWORD_TEXTFIELD_CHANGED,
    payload: value,
  };
};

export const loginAPI = (username, password) => {
  return dispatch => {
    var data = {
      username: username,
      password: password,
    };
    return axios({
      method: 'post',
      url: LOGIN_API,
      data,
    })
      .then(response => {
        // new Promise = ((resolve,reject)=>setTimeout(()=>resolve(),100))
        var responseData = response.data;
        if (responseData.success) {
          dispatch({
            type: TOGGLE_ADD_ADDRESS_LOADER,
            payload: false,
          });
          console.log(responseData);
          return Promise.resolve(true);
        } else {
          dispatch({
            type: TOGGLE_ADD_ADDRESS_LOADER,
            payload: false,
          });
          return Promise.resolve(false);
          // CODE
        }
      })
      .catch(err => {
        if (err.response.status !== 514 && err.response.status !== 404) {
          // code
        }
        return Promise.reject(false);
      });
  };
};
