import * as ACTION_TYPES from '../../constants/action-types';

const initialState = {
    username: '',
    dob: '',
    firstname: '',
    lastname: '',
    phoneNumber: '',
    loading: false,
    error: undefined,
    isFailed: false,
    isSuccess: false
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ACTION_TYPES.REGISTER_USERNAME_CREATE:
            return {
                ...state,
                username: payload.username,
                isUsernameValid: payload.isValid,
            };
        case ACTION_TYPES.REGISTER_FIRSTNAME_CREATE:
            return {
                ...state,
                firstname: payload.firstname,
                isFirstnameValid: payload.isValid,
            }
        case ACTION_TYPES.REGISTER_LASTNAME_CREATE:
            return {
                ...state,
                lastname: payload.lastname,
                isLastnameValid: payload.isValid,
            }
        case ACTION_TYPES.REGISTER_DOB_CREATE:
            return {
                ...state,
                dob: payload.dob,
                isDoBValid: payload.isValid,
            };
        case ACTION_TYPES.REGISTER_PHONENUMBER_CREATE:
            return {
                ...state,
                phonenumber: payload.phonenumber,
                isPhonenumberValid: payload.isValid,
            }
        case ACTION_TYPES.REGISTER_REQUESTED:
            return {
                ...state,
                loading: true,
                isFailed: false,
            }
        case ACTION_TYPES.REGISTER_FAILED:
            return {
                ...state,
                error: payload.data.message,
                loading: false,
                isFailed: true,
            };
        case ACTION_TYPES.REGISTER_SUCCESS:
            return {
                ...state,
                username: '',
                firstname: '',
                lastname: '',
                dob: '',
                phonenumber: '',
                loading: false,
                isFailed: false,
                isSuccess: true
            };
        case ACTION_TYPES.REGISTER_FAILED_UNKNOWN_REASON:
            return {
                ...state,
                error: 'Please check internet connection',
                loading: false,
                isFailed: true,
            };
        default:
            return state;
    }
};
