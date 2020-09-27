import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'

import Registration from './userAuth/AuthForm'
import Projects from './Projects'

// const store = createStore()

function App() {
  return (
    // <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/projects' component={Projects} />
        <Route path='/' exact component={Registration} />
      </Switch>
    </Router>
    // </Provider>
  )
}

export default App
