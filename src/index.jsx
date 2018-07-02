import * as React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './containers/App'
import './assets/styles/main.scss'

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default

    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('app')
    )
  })
}
