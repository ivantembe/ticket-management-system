import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(3, 0, 2),
    padding: theme.spacing(1.5, 0),
  },
}))

const ButtonComponent = ({ type, fullWidth, label }) => {
  const classes = useStyles()
  return (
    <Button
      type={type}
      variant='contained'
      color='primary'
      fullWidth={fullWidth}
      className={classes.button}
    >
      {label}
    </Button>
  )
}

export default ButtonComponent
