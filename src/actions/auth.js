import Swal from "sweetalert2";
// Types
import { types } from "../types/types";
// Helpers
import { tokenlessFetch } from "../helpers/fetch";

export const startLogin = ( email, password ) => {
  return async( dispatch ) => {
    const resp = await tokenlessFetch( 'auth/login', { email, password }, 'POST' );
    const body = await resp.json();
    console.log( body );

    if ( body.ok ) {
      localStorage.setItem( 'token', body.token );
      localStorage.setItem( 'token-init-date', new Date().getTime() );

      dispatch( login({
        uid: body.user.uid,
        name: body.user.name,
      }));
    } else {
      Swal.fire( 'Error', body.msg || body.errors.errors[0].msg, 'error' );
    }
  }
}

const login = ( user ) => ({
  type: types.authLogin,
  payload: user
});


export const startRegister = ( name, email, password ) => {
  return async( dispatch ) => {
    const resp = await tokenlessFetch( 'auth/register', { name, email, password }, 'POST' );
    const body = await resp.json();
    console.log(body);

    if ( body.ok ) {
      localStorage.setItem( 'token', body.token );
      localStorage.setItem( 'token-init-date', new Date().getTime() );

    } else {
      Swal.fire( 'Error', body.msg || body.errors.errors[0].msg, 'error' );
    }
  }
}

