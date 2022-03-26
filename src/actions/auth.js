// Types
import { types } from "../types/types";
// Helpers
import { tokelessFetch } from "../helpers/fetch";

export const startLogin = ( email, password ) => {
  return async() => {
    const resp = await tokelessFetch( 'auth/login', { email, password }, 'POST' );
    const body = await resp.json();

    console.log(body)
  }
}

export const startRegister = ( email, password, name ) => {
  return ( dispatch ) => {

  }
}

export const login = ( uid, displayName ) => ({
  type: types.login,
  payload: {
    uid, 
    displayName
  }
});
