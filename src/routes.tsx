import * as React from 'react'
import { Switch, Route } from 'react-router'
import App from './App'
import HomePage from './components/home/HomePage'
import CounterPage from './components/counter/CounterPage'

export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={CounterPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
)
