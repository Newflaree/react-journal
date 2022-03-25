// Types
import { types } from "../types/types";

export const startLogin = ( email, password ) => {
  return ( dispatch ) => {
    setTimeout(() => {
      dispatch( login(123, 'Pedro') );
    }, 3000)
  }
}

export const startRegister = ( email, password, name ) => {

}

export const login = ( uid, displayName ) => ({
  type: types.login,
  payload: {
    uid, 
    displayName
  }
});
