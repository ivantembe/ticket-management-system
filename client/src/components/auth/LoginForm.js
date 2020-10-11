import React from 'react'
import { TextValidator } from 'react-material-ui-form-validator'
import CheckBoxComponent from '../shared/inputs/CheckBoxComponent'
import ButtonComponent from '../shared/inputs/ButtonComponent'
import FormSwitch from './FormSwitch'

const Login = ({ authData, handleChange, handleFormSwitch }) => {
  return (
    <div>
      <TextValidator
        name='email'
        label='Email Address'
        value={authData.email}
        onChange={handleChange}
        variant='outlined'
        margin='normal'
        autoComplete='off'
        fullWidth
        validators={['required', 'isEmail']}
        errorMessages={['Field is required', 'Email is not valid']}
        autoFocus
      />
      <TextValidator
        name='password'
        type='password'
        label='Password'
        value={authData.password}
        onChange={handleChange}
        variant='outlined'
        margin='normal'
        autoComplete='off'
        fullWidth
        validators={['required', 'minStringLength:6']}
        errorMessages={['Field is required', 'Password is too short. Min 6 characters']}
      />
      <CheckBoxComponent value='remember' label='Remember me' />
      <ButtonComponent type='submit' label='Sign In' fullWidth />
      <FormSwitch
        passwordRecoverLink='#'
        passwordRecover='Forgot password?'
        actionLabel="Don't have an account? Sign Up"
        handleFormSwitch={handleFormSwitch}
      />
    </div>
  )
}
export default Login
