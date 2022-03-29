import React from 'react';
import validator from 'validator';
import { Link } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
// Custom hooks
import { useForm } from '../../hooks/useForm';
import {startRegister} from '../../actions/auth';

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector( state => state.ui );

  const [ formRegisterValues, handleRegisterInputChange ] = useForm({
    registerName: 'Evelyn',
    registerEmail: 'ev@lyn.com',
    registerPassword: '123456',
    registerPassword2: '123456'
  });

  const {
    registerName,
    registerEmail,
    registerPassword,
    registerPassword2
  } = formRegisterValues;

  const handleRegister = ( e ) => {
    e.preventDefault();
    
    if ( isFormValid() ) {
      dispatch( startRegister( registerName, registerEmail, registerPassword, ) );
    }
  }

  const isFormValid = () => {
    if ( registerName.trim().length === 0 ) {
      dispatch( setError('Name is required') );
      return false;
    } else if ( !validator.isEmail( registerEmail ) ) {
      dispatch( setError('Email is not valid') );
      return false;
    } else if ( registerPassword !== registerPassword2 || registerPassword.length < 6 ) {
      dispatch( setError('Passwords are different and must be longer than 5 characters') );
      return false;
    }

    dispatch( removeError() );
    return true;
  }

  return (
    <>
      <h3 className='auth__title'>Register</h3>

      <form onSubmit={ handleRegister }>
        {
          msgError &&
          (
            <div className='auth__alert-error text-center'>
              { msgError }
            </div>
          )
        }

        <input 
          className='auth__input'
          type='text'
          placeholder='Name'
          name='registerName'
          autoComplete='off'
          value={ registerName }
          onChange={ handleRegisterInputChange }
        />
        <input 
          className='auth__input'
          type='text'
          placeholder='Email'
          name='registerEmail'
          autoComplete='off'
          value={ registerEmail }
          onChange={ handleRegisterInputChange }
        />
        <input 
          className='auth__input'
          type='password'
          placeholder='Password'
          name='registerPassword'
          value={ registerPassword }
          onChange={ handleRegisterInputChange }
        />
        <input 
          className='auth__input'
          type='password'
          placeholder='Confirm password'
          name='registerPassword2'
          value={ registerPassword2 }
          onChange={ handleRegisterInputChange }
        />

        <button
          className='btn btn-primary btn-block mb-5'
          type='submit'
        >
          Register
        </button>
        <hr />

        <Link 
          className='link'
          to='/auth/login'
        >
          Already registered?
        </Link>

      </form>

    </>
  )
}
