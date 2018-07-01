import React from 'react'
import { hot } from 'react-hot-loader'
import { Route, Router, Switch } from 'react-router'
import styled from 'styled-components'
import Home from '../Home'
import Profile from '../Profile'

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const App = ({ history }) => (
  <Container>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  </Container>
)

export default hot(module)(App)
