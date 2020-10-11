import React from 'react'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'

const FormSwitch = ({ passwordRecover, passwordRecoverLink, actionLabel, handleFormSwitch }) => (
  <Grid container>
    <Grid item xs>
      <Link href={passwordRecoverLink} variant='body2'>
        {passwordRecover}
      </Link>
    </Grid>
    <Grid item>
      <Link href='#' variant='body2' onClick={handleFormSwitch}>
        {actionLabel}
      </Link>
    </Grid>
  </Grid>
)

export default FormSwitch
