import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  grid: {
    height: '100vh',
    flexDirection: 'column',
  },
  text: {
    fontWeight: '600',
    fontSize: '1.2rem',
    color: '#333',
    marginLeft: '1rem',
  },
}))
export default useStyles
