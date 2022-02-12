import {COMPANY_CHECKBOX_CHANGED, COMPANY_NAME_TEXT_FIELD_CHANGED} from '../action/actionType';

var INITIAL_STATE = {
  total_students: 20,
  total_companies: 30,
  total_jobs: 50,
  new_company_name: '',
  comapnyCheckbox: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COMPANY_NAME_TEXT_FIELD_CHANGED:
      return {...state, new_company_name: action.payload};
    case COMPANY_CHECKBOX_CHANGED:
        return {...state, companyCheckbox: action.payload};
    default:
      return state;
  }
};
