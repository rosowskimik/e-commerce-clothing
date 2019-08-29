import { takeLatest, put, all, call, delay } from 'redux-saga/effects';

import userActionTypes from './user.types';

import {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  clearUserError
} from './user.actions';

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser
} from '../../firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* signUpNewUser({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield createUserProfileDocument(user, { displayName });
    yield put(signUpSuccess(user));
  } catch (error) {
    yield put(signUpFailure(error.message));
  }
}

export function* onSignUpStart() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUpNewUser);
}

export function* signInWithEmailAndPassword({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(
    userActionTypes.EMAIL_SIGN_IN_START,
    signInWithEmailAndPassword
  );
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}

export function* onSignOutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onSignInOrUpFailure() {
  yield takeLatest(
    [userActionTypes.SIGN_IN_FAILURE, userActionTypes.SIGN_UP_FAILURE],
    timedClearErrors
  );
}

export function* timedClearErrors() {
  yield delay(2500);
  yield put(clearUserError());
}

export function* onCheckCurrentUser() {
  yield takeLatest(userActionTypes.CHECK_CURRENT_USER, isUserAuthenticated);
}

export default function* userSagas() {
  yield all([
    call(onSignUpStart),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckCurrentUser),
    call(onSignOutStart),
    call(onSignInOrUpFailure)
  ]);
}
