import {
  COMPANY_NAME_TEXT_FIELD_CHANGED,
  USERNAME_TYPE_CHANGED,
  PASSWORD_TYPE_CHANGED,
  USERTYPE_NAME_CHANGED,
  USERTYPE_KEY_CHANGED,
  COMPANY_CHECKBOX_CHANGED, 
  COMPANY_NAME_FOR_JOB_CHANGED, 
  // COMPANY_NAME_TEXT_FIELD_CHANGED, 
  JOB_CTC_TEXT_CHANGED, 
  JOB_DESCRIPTION_TEXT_CHANGED, 
  JOB_TITLE_TEXTFIELD_CHANGED
} from '../action/actionType';
// import {COMPANY_CHECKBOX_CHANGED, COMPANY_NAME_FOR_JOB_CHANGED, COMPANY_NAME_TEXT_FIELD_CHANGED, JOB_CTC_TEXT_CHANGED, JOB_DESCRIPTION_TEXT_CHANGED, JOB_TITLE_TEXTFIELD_CHANGED} from '../action/actionType';

var INITIAL_STATE = {
  total_students: 20,
  total_companies: 30,
  total_jobs: 50,
  new_company_name: '',
  user_name: '',
  password: '',
  usertype_name: 'User-Type',
  usertype_key: '',
  comapnyCheckbox: false,
  job_title: "",
  companyNameForJob: "Select Job",
  job_ctc: "",
  job_desp: "",
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
    case COMPANY_CHECKBOX_CHANGED:
      return {...state, companyCheckbox: action.payload};
    case JOB_TITLE_TEXTFIELD_CHANGED:
      return {...state, job_title: action.payload};
    case COMPANY_NAME_FOR_JOB_CHANGED:
      return {...state, companyNameForJob: action.payload};
    case JOB_CTC_TEXT_CHANGED:
      return {...state, job_ctc: action.payload};
    case JOB_DESCRIPTION_TEXT_CHANGED:
      return {...state, job_desp: action.payload};
    default:
      return state;
  }
};
