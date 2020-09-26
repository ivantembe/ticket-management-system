import React from 'react'
import Grid from '@material-ui/core/Grid'
import InputField from '../common/inputs/InputField'
import ButtonComponent from '../common/inputs/ButtonComponent'
import FormSwitch from './FormSwitch'

const SignUp = ({ authData, handleChange, handleFormSwitch }) => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <InputField
            name='fname'
            label='First Name'
            value={authData.fname}
            onChange={handleChange}
            validators={['required', 'minStringLength:3']}
            errorMessages={['Field is required', 'Name is too short. Min 3 characters']}
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            name='lname'
            label='Last Name'
            value={authData.lname}
            onChange={handleChange}
            validators={['required', 'minStringLength:3']}
            errorMessages={['Field is required', 'Name is too short. Min 3 characters']}
          />
        </Grid>
      </Grid>
      <InputField
        name='email'
        label='Email Address'
        value={authData.email}
        onChange={handleChange}
        validators={['required', 'isEmail']}
        errorMessages={['Field is required', 'Email is not valid']}
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
      <ButtonComponent type='submit' label='Sign Up' fullWidth />
      <FormSwitch
        passwordRecoverLink='#'
        passwordRecover=''
        actionLabel='Already have an account? Sign in'
        handleFormSwitch={handleFormSwitch}
      />
    </div>
  )
}
export default SignUp
