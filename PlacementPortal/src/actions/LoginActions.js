import axios from "axios";
import { LOGIN_API } from "../extras/APIs";
import { PASSWORD_TEXTFIELD_CHANGED, USERNAME_TEXT_FIELD_CHANGED,TOGGLE_LOGIN_LOADER } from "./actionTypes";

export const usernameTextFieldChanged = value => {
    return dispatch=>{
        dispatch({
        type: USERNAME_TEXT_FIELD_CHANGED,
        payload: value
        })
    };
}

export const passwordTextFieldChanged = value => {
    return{
        type: PASSWORD_TEXTFIELD_CHANGED,
        payload: value
    };
}

export const loginAPI = (username, password,navigation) => {
    return dispatch => {
      var data = {
        username: username,
        password: password,
      }
      // dispatch({
      //   type: TOGGLE_LOGIN_LOADER,
      //   payload: true,
      // });
        return axios({
            method: 'post',
            url: LOGIN_API,
            data,
          })
            .then(response => {
              var responseData = response.data;
              new Promise((resolve, reject) => setTimeout(() => resolve(), 100));
              if (responseData.success) {
                console.log(responseData);
                // dispatch({
                //   type: TOGGLE_LOGIN_LOADER,
                //   payload: false,
                // })
                return Promise.resolve(true);

              } else {
    
                // dispatch({
                //   type: TOGGLE_LOGIN_LOADER,
                //   payload: false,
                // })
                return Promise.resolve(false);
                // CODE
              }
      
            })
            .catch(err => {
              new Promise((resolve, reject) => setTimeout(() => resolve(), 100));
              // dispatch({
              //   type: TOGGLE_LOGIN_LOADER,
              //   payload: false,
              // })
              return Promise.reject(false);
            });
    }
}