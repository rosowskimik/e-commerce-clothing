import userActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case userActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        currentUser: null,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
