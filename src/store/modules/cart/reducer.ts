import { ICartState, IAction } from './types'

const initialState = {
  products: [],
  total: 0
}

export const cart = (state: ICartState = initialState, action: IAction): ICartState => {
  switch (action.type) {
    default:
      return state
  }
}
