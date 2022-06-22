import { createAction } from "../../utils/reducer.utils"
import { USER_ACTION_TYPES } from "./user.type"


export const checkUserSession = (user) => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION, {user});

export const emailSignInStart = (email, password) => createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {email, password})

export const  signInSuccess = (user) => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const  signInFailed = (error) => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, error);

export const signUpStart = (email, password, displayName) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  });

export const signUpSuccess = (user) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {user});

export const signUpFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

  
  export const signOutStart = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_START);

  export const signOutSuccess = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signOutFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);
