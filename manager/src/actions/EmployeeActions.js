import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { EMPLOYEE_CREATE, EMPLOYEE_SAVE, EMPLOYEE_FETCH } from './types';

export const employeeCreate = ({ key, value }) => {
  return {
    type: EMPLOYEE_CREATE,
    payload: { key, value }
  };
};

export const employeeSave = ({ name, phone, shift }) => {
  console.log(name, phone, shift);
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`).push({ name, phone, shift })
    .then(() => {
      dispatch({ type: EMPLOYEE_SAVE });
      Actions.employeeList({ type: 'reset' });
    });
  };
};

export const employeeUpdate = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
    .set({ name, phone, shift })
    .then(() => {
      dispatch({ type: EMPLOYEE_SAVE });
      Actions.employeeList({ type: 'reset' });
    });
  };
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();
  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
    .remove()
    .then(() => {
      Actions.employeeList({ type: 'reset' });
    });
  };
};

export const employeeFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .on('value', snapshot => {
          dispatch({ type: EMPLOYEE_FETCH, payload: snapshot.val() });
      }
    );
  };
};
