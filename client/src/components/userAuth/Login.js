import React from 'react'
import InputField from '../common/inputs/InputField'
import CheckBoxComponent from '../common/inputs/CheckBoxComponent'
import ButtonComponent from '../common/inputs/ButtonComponent'
import FormSwitch from './FormSwitch'

const Login = ({ authData, handleChange, handleFormSwitch }) => {
  return (
    <div>
      <InputField
        name='email'
        label='Email Address'
        value={authData.email}
        onChange={handleChange}
        validators={['required', 'isEmail']}
        errorMessages={['Field is required', 'Email is not valid']}
        autoFocus
      />
      <InputField
        name='password'
        type='password'
        label='Password'
        value={authData.password}
        onChange={handleChange}
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
