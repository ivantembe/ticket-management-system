import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import AssignmentIcon from '@material-ui/icons/Assignment'
import { teal } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  rounded: {
    color: '#fff',
    backgroundColor: teal[500],
  },
}))

const ImageAvatar = ({ data }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Avatar variant='rounded' className={classes.noColor} src=''>
        <AssignmentIcon />
      </Avatar>
    </div>
  )
}

export default ImageAvatar
