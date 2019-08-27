import * as ACTION_TYPES from '../../constants/action-types';
import { api } from '../../services/network/API';
import { setStorageLogin, removeStorageLogin, STORAGE_VALUE_LOGIN } from '../../utils/storage';

export const usernameChanged = (username, isValid) => (dispatch) => {
  dispatch({
    type: ACTION_TYPES.LOGIN_USERNAME_CHANGED,
    payload: {
      username,
      isValid,
    },
  });
};

export const doBChanged = (dob, isValid) => (dispatch) => {
  dispatch({
    type: ACTION_TYPES.LOGIN_DOB_CHANGED,
    payload: {
      dob,
      isValid,
    },
  });
};

const loginUserFail = (dispatch, response) => {
  if (response != null && response.data != null) {
    dispatch({ type: ACTION_TYPES.LOGIN_FAILED, payload: response });
  } else {
    dispatch({ type: ACTION_TYPES.LOGIN_FAILED_UNKNOWN_REASON, payload: response });
  }
};

const loginUserSuccess = (dispatch, response, username, dob) => {
  dispatch({
    type: ACTION_TYPES.LOGIN_SUCCESS,
    payload: response,
  });
  api.setToken(response.data.token, response.data.userId);
  STORAGE_VALUE_LOGIN.username = username;
  STORAGE_VALUE_LOGIN.dob = dob;
  setStorageLogin(JSON.stringify(STORAGE_VALUE_LOGIN));
  dispatch({ type: ACTION_TYPES.NAVIGATE_HOME });
};

const processLoginResponse = (dispatch, response, username, dob) => {
  if (response.status === 200) {
    loginUserSuccess(dispatch, response, username, dob);
  } else {
    loginUserFail(dispatch, response);
  }
};

export const requestLogin = (username, dob) => (dispatch) => {
  dispatch({ type: ACTION_TYPES.LOGIN_REQUESTED });
  api.callLogin(username, dob).then(response => processLoginResponse(dispatch, response, username, dob));
};

export const requestLogout = (username, dob) => (dispatch) => {
  dispatch({ type: ACTION_TYPES.LOGOUT_USER });
  dispatch({ type: ACTION_TYPES.NAVIGATE_LOGIN });
  removeStorageLogin();
};
