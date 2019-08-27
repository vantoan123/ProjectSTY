import * as ACTION_TYPES from '../../constants/action-types';
import { api } from '../../services/network/API';

export const userNameCreate = (username, isValid) => (dispatch) => {
    dispatch({
        type: ACTION_TYPES.REGISTER_USERNAME_CREATE,
        payload: {
            username,
            isValid,
        },
    });
};
export const firstNameCreate = (firstname, isValid) => (dispatch) => {
    dispatch({
        type: ACTION_TYPES.REGISTER_FIRSTNAME_CREATE,
        payload: {
            firstname,
            isValid,
        },
    });
};
export const lastNameCreate = (lastname, isValid) => (dispatch) => {
    dispatch({
        type: ACTION_TYPES.REGISTER_LASTNAME_CREATE,
        payload: {
            lastname,
            isValid,
        },
    });
};
export const doBCreate = (dob, isValid) => (dispatch) => {
    dispatch({
        type: ACTION_TYPES.REGISTER_DOB_CREATE,
        payload: {
            dob,
            isValid,
        },
    });
};
export const phoneNumberCreate = (phonenumber, isValid) => (dispatch) => {
    dispatch({
        type: ACTION_TYPES.REGISTER_PHONENUMBER_CREATE,
        payload: {
            phonenumber,
            isValid,
        },
    });
};
const registerUserFail = (dispatch, response) => {
    if (response != null && response.data != null) {
        dispatch({ type: ACTION_TYPES.REGISTER_FAILED, payload: response });
    } else {
        dispatch({ type: ACTION_TYPES.REGISTER_FAILED_UNKNOWN_REASON, payload: response });
    }
};
const registerUserSuccess = (dispatch, response) => {
    dispatch({
        type: ACTION_TYPES.REGISTER_SUCCESS,
        payload: response,
    });
    dispatch({ type: ACTION_TYPES.NAVIGATE_LOGIN });
};
const processRegisterResponse = (dispatch, response) => {
    if (response.status === 200) {
      registerUserSuccess(dispatch, response);
    } else {
      registerUserFail(dispatch, response);
    }
  };
export const requestRegister = (username, firstName, lastName, dateOfBirth, phoneNumber) => (dispatch) => {
    dispatch({ type: ACTION_TYPES.REGISTER_REQUESTED });
    api.createUser(username, firstName, lastName, dateOfBirth, phoneNumber).then(response => processRegisterResponse(dispatch, response));
};
