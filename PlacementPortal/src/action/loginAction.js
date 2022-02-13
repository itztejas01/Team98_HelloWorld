import axios from 'axios';
import {LOGIN_API} from '../extras/APIs';
import {
  PASSWORD_TEXTFIELD_CHANGED,
  USERNAME_TEXT_FIELD_CHANGED,
  TOGGLE_LOGIN_LOADER,
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

export const loginAPI = (username, password,navigation) => {
  return dispatch => {
    var data = {
      username: username,
      password: password,
    };
    dispatch({
      type:TOGGLE_LOGIN_LOADER,
      payload:true
    })
    return axios({
      method:'post',
      url: LOGIN_API,
      data,
    })
      .then(response => {
        var responseData = response.data;
        if (responseData.success) {
          dispatch({
            type:TOGGLE_LOGIN_LOADER,
            payload:false
          })
          new Promise((resolve, reject) => setTimeout(() => resolve(), 100));
          // console.log(responseData);
          if(responseData.result.user_details.type === 'super_admin'){
            navigation.navigate('Super Admin')
          }else if (responseData.result.user_details.type === 'student'){
            navigation.navigate('Student')
          }else if(responseData.result.user_details.type === 'other_admin'){
            console.log('other admin');
          }
          return Promise.resolve(true);
        } else {
          dispatch({
            type:TOGGLE_LOGIN_LOADER,
            payload:false
          })
          console.log(response.data);
          new Promise((resolve, reject) => setTimeout(() => resolve(), 100));
          return Promise.resolve(false);
          // CODE
        }
      })
      .catch(err => {
        dispatch({
          type:TOGGLE_LOGIN_LOADER,
          payload:false
        })
        console.log('err',err);
        return Promise.reject(false);
      });
  };
};
