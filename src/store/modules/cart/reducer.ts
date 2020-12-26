import { IState, IAction } from './types'

const initialState = {
  cart: []
}

export const cart = (state: IState = initialState, action: IAction): IState => {
  switch (action.type) {
    default:
      return state
  }
}
