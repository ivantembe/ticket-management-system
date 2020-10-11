import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Registration from './auth/authPage'
import ProjectList from './projects/ProjectList'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/projects/:userId' component={ProjectList} />
        <Route path='/' exact component={Registration} />
      </Switch>
    </Router>
  )
}

export default App
