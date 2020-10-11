import React, { useEffect } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Avatar from '../shared/Avatar'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import { fetchProjectsByUser } from '../../store/actions'
import useStyles from './useStyles'

const ProjectList = ({ fetchProjectsByUser, projects }) => {
  const classes = useStyles()

  useEffect(() => {
    fetchProjectsByUser()
  }, [fetchProjectsByUser])

  const renderProjectsByUser = projects.map((project) => {
    return (
      <div key={project._id}>
        <ListItem>
          <Avatar data={project} />
          <Typography>
            <Link href='#' className={classes.text}>
              {project.name}
            </Link>
          </Typography>
        </ListItem>
        <Divider light />
      </div>
    )
  })

  const emptyProjects = (
    <div>
      <Typography variant='h6' color='textSecondary' align='center' gutterBottom>
        You have no projects yet
      </Typography>
      <Divider light />
    </div>
  )

  return (
    <Grid container justify='center' alignItems='center' className={classes.grid}>
      <List component='nav' className={classes.root} aria-label='projects'>
        {projects.length !== 0 ? renderProjectsByUser : emptyProjects}
      </List>
      <Link href='#' variant='h6'>
        Create a new project
      </Link>
    </Grid>
  )
}

const mapStateToProps = (state) => {
  return { projects: state.projects }
}

export default connect(mapStateToProps, { fetchProjectsByUser })(ProjectList)
