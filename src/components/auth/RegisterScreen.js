import React from 'react';
import validator from 'validator';
import { Link } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
// Custom hooks
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector( state => state.ui );

  const [ formValues, handleInputChange ] = useForm({
    name: 'Evelyn',
    email: 'ev@lyn.com',
    password: '123456',
    password2: '123456'
  });

  const {
    name,
    email,
    password,
    password2
  } = formValues;

  const handleRegister = ( e ) => {
    e.preventDefault();
    if ( isFormValid() ) {
      console.log( 'Register Success' );
    }
  }

  const isFormValid = () => {
    if ( name.trim().length === 0 ) {
      dispatch( setError('Name is required') );
      return false;
    } else if ( !validator.isEmail( email ) ) {
      dispatch( setError('Email is not valid') );
      return false;
    } else if ( password !== password2 || password.length < 6 ) {
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
            <div className='auth__alert-error'>
              { msgError }
            </div>
          )
        }

        <input 
          type='text'
          placeholder='Name'
          name='name'
          autoComplete='off'
          className='auth__input'
          value={ name }
          onChange={ handleInputChange }
        />
        <input 
          type='text'
          placeholder='Email'
          name='email'
          autoComplete='off'
          className='auth__input'
          value={ email }
          onChange={ handleInputChange }
        />
        <input 
          type='password'
          placeholder='Password'
          name='password'
          className='auth__input'
          value={ password }
          onChange={ handleInputChange }
        />
        <input 
          type='password'
          placeholder='Confirm password'
          name='password2'
          className='auth__input'
          value={ password2 }
          onChange={ handleInputChange }
        />

        <button
          type='submit'
          className='btn btn-primary btn-block mb-5'
        >
          Register
        </button>
        <hr />

        <Link 
          to='/auth/login'
          className='link'
        >
          Already registered?
        </Link>

      </form>

    </>
  )
}
