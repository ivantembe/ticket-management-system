import React from 'react'
import Grid from '@material-ui/core/Grid'
import { TextValidator } from 'react-material-ui-form-validator'
import ButtonComponent from '../shared/inputs/ButtonComponent'
import FormSwitch from './FormSwitch'

const SignUp = ({ authData, handleChange, handleFormSwitch }) => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextValidator
            name='fname'
            label='First Name'
            value={authData.fname}
            onChange={handleChange}
            variant='outlined'
            margin='normal'
            autoComplete='off'
            validators={['required', 'minStringLength:3']}
            errorMessages={['Field is required', 'Name is too short. Min 3 characters']}
            autoFocus
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextValidator
            name='lname'
            label='Last Name'
            value={authData.lname}
            onChange={handleChange}
            variant='outlined'
            margin='normal'
            autoComplete='off'
            validators={['required', 'minStringLength:3']}
            errorMessages={['Field is required', 'Name is too short. Min 3 characters']}
            fullWidth
          />
        </Grid>
      </Grid>
      <TextValidator
        name='email'
        label='Email Address'
        value={authData.email}
        onChange={handleChange}
        variant='outlined'
        margin='normal'
        autoComplete='off'
        validators={['required', 'isEmail']}
        errorMessages={['Field is required', 'Email is not valid']}
        fullWidth
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
        validators={['required', 'minStringLength:6']}
        errorMessages={['Field is required', 'Password is too short. Min 6 characters']}
        fullWidth
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
