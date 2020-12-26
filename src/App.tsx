import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'

import './styles/_main.sass'

import { Router } from './router'
import { store } from './store'

export const App: React.FC = (): ReactElement => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
