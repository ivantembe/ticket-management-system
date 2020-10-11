import api from '../../services'

export const fetchProjectsByUser = () => async (dispatch) => {
  const path = window.location.pathname
  const response = await api.get(`${path}`)
  dispatch({ type: 'FETCH_PROJECTS', payload: response.data.projects })
}
