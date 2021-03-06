import React, { useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { ValidatorForm } from 'react-material-ui-form-validator'
// import { connect } from 'react-redux'
import axios from 'axios'

import Heading from '../shared/typography/Heading'
import SimpleAlerts from '../shared/Alert'
import Copyright from '../shared/Footer'
import Login from './LoginForm'
import SignUp from './SignUpForm'

// import { userAuthAction } from '../../store/actions/authActions'

import useStyles from './styles/useStyles'

const AuthForm = (props) => {
  const [authData, setAuthData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    rememberMe: false,
  })
  const [isToggleOn, setIsToggleOn] = useState(true)
  const [alertMessage, setAlertMessage] = useState('')
  const classes = useStyles()
  // const { authData, isToggleOn, alertMessage } = props

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
    const { fname, lname, email, password } = authData
    const loginData = { email, password }
    const signupData = { fname, lname, email, password }

    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    }
    axios
      .post(
        `http://localhost:8080/users/${isToggleOn ? 'login' : 'signup'}`,
        isToggleOn ? loginData : signupData,
        axiosConfig
      )
      .then((response) => {
        // console.log(response.data.user)
        props.history.push(`/projects/${response.data.user}`)
      })
      .catch((err) => {
        const errorsObj = Object.values(err.response.data.errors)
        errorsObj.forEach((err) => {
          setAlertMessage(err)
        })
      })
  }

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Heading component='h1' variant='h5' label={isToggleOn ? 'Sign In' : 'Sign Up'} />
          {alertMessage !== '' ? <SimpleAlerts message={alertMessage} /> : ''}
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

// Redux
// const mapStateToProps = (state) => {
//   const { authData, isToggleOn, alertMessage } = state.auth
//   return {
//     authData,
//     isToggleOn,
//     alertMessage,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     signUp: (user, authType) => dispatch(userAuthAction(user, authType)),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(AuthForm)
export default AuthForm
