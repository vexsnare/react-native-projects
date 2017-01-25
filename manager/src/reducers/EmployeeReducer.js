import {
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE,
  EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

const EmployeeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_CREATE:
      return { ...state, [action.payload.key]: action.payload.value };
    case EMPLOYEE_SAVE:
        return { INITIAL_STATE };
    case EMPLOYEE_UPDATE:
        return { INITIAL_STATE };
    default:
      return state;
  }
};

export default EmployeeReducer;
