import * as React from 'react'
import { Route, Router, Switch } from 'react-router'
import { Provider } from 'mobx-react'
import styled from 'styled-components'
import { createBrowserHistory, History } from 'history'
import { createStores } from '../../stores/createStore'
import UserModel from '../../models/UserModel'
import Home from '../Home'
import Profile from '../Profile'

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const history = createBrowserHistory()
const defautlUser = UserModel.create({
  name: 'Default Name'
})
const stores = createStores(history, defautlUser)

const App = () => (
  <Provider {...stores}>
    <Container>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </Container>
  </Provider>
)

export default App
