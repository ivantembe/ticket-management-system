import React from 'react'
// import TextField from '@material-ui/core/TextField'
import { TextValidator } from 'react-material-ui-form-validator'

const InputField = ({
  name,
  type,
  label,
  value,
  validators,
  errorMessages,
  autoFocus,
  onChange,
}) => (
  <TextValidator
    variant='outlined'
    margin='normal'
    fullWidth
    label={label}
    name={name}
    type={type}
    value={value}
    validators={validators}
    errorMessages={errorMessages}
    autoFocus={autoFocus}
    onChange={onChange}
    autoComplete='off'
  />
)

export default InputField
