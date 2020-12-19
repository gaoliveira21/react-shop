import React, { ReactElement } from 'react'

import './styles/_main.sass'

import { Router } from './router'

export const App: React.FC = (): ReactElement => {
  return (
    <Router />
  )
}
