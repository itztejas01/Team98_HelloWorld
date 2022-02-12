import {
  COMPANY_NAME_TEXT_FIELD_CHANGED,
  USERNAME_TYPE_CHANGED,
  PASSWORD_TYPE_CHANGED,
  USERTYPE_NAME_CHANGED,
  USERTYPE_KEY_CHANGED,
} from '../action/actionType';

var INITIAL_STATE = {
  total_students: 20,
  total_companies: 30,
  total_jobs: 50,
  new_company_name: '',
  user_name: '',
  password: '',
  usertype_name: 'User-Type',
  usertype_key: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COMPANY_NAME_TEXT_FIELD_CHANGED:
      return {...state, new_company_name: action.payload};
      case USERNAME_TYPE_CHANGED:
      return {...state, user_name: action.payload}
    case PASSWORD_TYPE_CHANGED:
      return {...state, password: action.payload};
    case USERTYPE_NAME_CHANGED:
      return {...state, usertype_name: action.payload};
    case USERTYPE_KEY_CHANGED:
      return {...state, usertype_key: action.payload};
    default:
      return state;
  }
};
