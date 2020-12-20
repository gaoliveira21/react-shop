import React, { ReactElement } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home, SignIn, Store, Cart } from '@/pages'

export const Router: React.FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/store" component={Store} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  )
}
