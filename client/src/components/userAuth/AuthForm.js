import React, { useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { ValidatorForm } from 'react-material-ui-form-validator'

import Heading from '../common/typography/Heading'
import Copyright from '../common/Copyright'
import Login from './Login'
import SignUp from './SignUp'

import useStyles from './styles/useStyles'

const AuthForm = () => {
  const [authData, setAuthData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    rememberMe: false,
  })
  const [isToggleOn, setIsToggleOn] = useState(true)
  const classes = useStyles()

  const handleFormSwitch = () => {
    setIsToggleOn(!isToggleOn)
  }

  const handleChange = (ev) => {
    ev.preventDefault()
    const data = { ...authData }
    data[ev.target.name] = ev.target.value
    setAuthData(data)
  }

  const handleSubmit = () => {
    console.log(authData)
  }

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Heading component='h1' variant='h5' label={isToggleOn ? 'Sign In' : 'Sign Up'} />
          <ValidatorForm className={classes.form} useref='form' onSubmit={handleSubmit}>
            {isToggleOn ? (
              <Login
                authData={authData}
                handleChange={handleChange}
                handleFormSwitch={handleFormSwitch}
              />
            ) : (
              <SignUp
                authData={authData}
                handleChange={handleChange}
                handleFormSwitch={handleFormSwitch}
              />
            )}

            <Box mt={5}>
              <Copyright />
            </Box>
          </ValidatorForm>
        </div>
      </Grid>
    </Grid>
  )
}

export default AuthForm
