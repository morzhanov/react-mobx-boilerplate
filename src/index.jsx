import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { createBrowserHistory } from 'history'
import { createStores } from './stores/createStore'
import App from './containers/App'
import UserModel from './models/UserModel'
import './assets/styles/main.scss'

const history = createBrowserHistory()
const defautlUser = UserModel.create({ name: 'Default Name' })
const stores = createStores(history, defautlUser)

const root = (
  <Provider {...stores}>
    <App history={history} />
  </Provider>
)

ReactDOM.render(root, document.getElementById('app'))
