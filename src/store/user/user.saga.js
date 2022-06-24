import { takeLatest, all, call, put } from "redux-saga/effects";
import { 
    signInSuccess,
    signInFailed,
    signUpSuccess,
    signUpFailed,
    signOutSuccess,
    signOutFailed
 } from "./user.action";

 import { httpSignIn, httpSignUp } from "../../httpRequest/request";


import { USER_ACTION_TYPES } from "./user.type";

export function* isUserAuthenticated({payload: {user}}) {
    try {
        yield put(signInSuccess(user))
         
    } catch(error) {
        yield put(signInFailed(error))
    }
}

export function* signInWithEmail({payload: {email, password}}) {
    try {
        const user = yield call(httpSignIn, email, password);
        yield put(signInSuccess(user));
      } catch(error) {
        yield put(signInFailed(error))
    }
}

export function* signUp({payload: {displayName, email, password}}) {
    try {
      const user = yield call(httpSignUp, displayName, email, password);
      yield put(signUpSuccess(user))
    } catch(error) {
      yield put(signUpFailed(error))
  }}

export function* signInAfterSignUp({ payload: {user} }) {
    yield put(signInSuccess(user));
}


export function* signOut() {
    try {
      yield put(signOutSuccess());
    } catch(error) {
      yield put(signOutFailed(error));
    }
  }
  


export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onEmailSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
  }

export function* onSignUpSuccess() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
  }
  
  

export function* userSaga() {
    yield all([
        call(onCheckUserSession), 
        call(onEmailSignInStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onSignOutStart),
    ])
}