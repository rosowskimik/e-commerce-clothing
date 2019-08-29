import userActionTypes from './user.types';

export const signUpStart = (email, password, displayName) => ({
  type: userActionTypes.SIGN_UP_START,
  payload: { email, password, displayName }
});

export const signUpSuccess = user => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload: user
});

export const signUpFailure = error => ({
  type: userActionTypes.SIGN_UP_FAILURE,
  payload: error
});

export const emailSignInStart = emailAndPassword => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START
});

export const signInSuccess = user => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: error
});

export const signOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
  payload: error
});

export const checkCurrentUser = () => ({
  type: userActionTypes.CHECK_CURRENT_USER
});

export const clearUserError = () => ({
  type: userActionTypes.CLEAR_USER_ERROR
});
