import * as ACTION_TYPES from '../../constants/action-types';

const initialState = {
  username: '',
  dob: '',
  token: undefined,
  loading: false,
  error: undefined,
  isFailed: false,
  isUsernameValid: true,
  isDoBValid: true,
  userId: undefined,
  firstname: '',
  lastname: '',
  userType: undefined

};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.LOGIN_USERNAME_CHANGED:
      return {
        ...state,
        username: payload.username,
        isUsernameValid: payload.isValid,
      };
    case ACTION_TYPES.LOGIN_DOB_CHANGED:
      return {
        ...state,
        dob: payload.dob,
        isDoBValid: payload.isValid,
      };
    case ACTION_TYPES.LOGIN_REQUESTED:
      return {
        ...state,
        loading: true,
        isFailed: false,
      };
    case ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        token: payload.data.token,
        loading: false,
        isFailed: false,
        userId: payload.data.userId,
        firstname: payload.data.firstname,
        lastname: payload.data.lastname,
        userType: payload.data.userType,
      };
    case ACTION_TYPES.LOGIN_FAILED:
      return {
        ...state,
        error: 'Login fail',
        loading: false,
        isFailed: true,
      };
    case ACTION_TYPES.LOGIN_FAILED_UNKNOWN_REASON:
      return {
        ...state,
        error: 'Could not connect to the server',
        loading: false,
        isFailed: true,
      };
    case ACTION_TYPES.LOGOUT_USER:
      return {
        ...initialState,
      };
    case ACTION_TYPES.LOGIN_CLEAR_STATE:
      return {
        ...state,
        isAuthenticating: false,
        error: undefined,
        isFailed: false,
        isRequesForgotPasswordFailed: false,
        isResetingPassword: false,
      };
    default:
      return state;
  }
};
