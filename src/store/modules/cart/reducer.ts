import { ICartState, ICartAction, IProduct } from './types'
import { CartActionsTypes } from './actions'

const initialState = {
  products: [],
  total: 0
}

export const cart = (state: ICartState = initialState, action: ICartAction): ICartState => {
  switch (action.type) {
    case CartActionsTypes.ADD_SUCCESS:
      return {
        products: [...state.products, action.payload.product as IProduct],
        total: state.total
      }
    default:
      return state
  }
}
