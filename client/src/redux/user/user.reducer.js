import userActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  isLoading: false
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_UP_START:
      return {
        ...state,
        isLoading: true
      };
    case userActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        isloading: false
      };
    case userActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        currentUser: null,
        error: action.payload,
        isLoading: false
      };
    case userActionTypes.EMAIL_SIGN_IN_START:
      return {
        ...state,
        isLoading: true
      };
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        isLoading: false
      };
    case userActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        currentUser: null,
        error: action.payload,
        isLoading: false
      };
    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
        isLoading: false
      };
    case userActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case userActionTypes.CLEAR_USER_ERROR:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

export default userReducer;
