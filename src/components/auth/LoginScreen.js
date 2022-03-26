import React from "react";
import { Link } from 'react-router-dom';
// Redux
import { useDispatch } from "react-redux";
import { startLogin } from "../../actions/auth";
// Custom Hooks
import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const [ formLoginValues, handleLoginInputChange ] = useForm({
    loginEmail: 'test1@test.com',
    loginPassword: '123456'
  });

  const { loginEmail, loginPassword } = formLoginValues;

  const handleLogin = ( e ) => {
    e.preventDefault();
    dispatch( startLogin( loginEmail, loginPassword ) );
  }

  return (
    <>
      <h3 className='auth__title'>Login</h3>

      <form onSubmit={ handleLogin }>
        <input 
          className='auth__input'
          type='text'
          placeholder='Email'
          name='loginEmail'
          autoComplete='off'
          value={ loginEmail }
          onChange={ handleLoginInputChange }
        />
        <input 
          className='auth__input'
          type='password'
          placeholder='Password'
          name='loginPassword'
          value={ loginPassword }
          onChange={ handleLoginInputChange }
        />

        <button
          className='btn btn-primary btn-block mb-5'
          type='submit'
        >
          Login
        </button>

        <Link 
          to='/auth/register'
          className='link'
        >
          Create new account
        </Link>

      </form>

    </>
  )
}
