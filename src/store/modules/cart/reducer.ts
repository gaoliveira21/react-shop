/* eslint-disable no-case-declarations */
import { ICartState, ICartAction, IProduct } from './types'
import { CartActionsTypes } from './actions'

const initialState = {
  products: [],
  total: 0
}

export const cart = (state: ICartState = initialState, action: ICartAction): ICartState => {
  switch (action.type) {
    case CartActionsTypes.ADD_SUCCESS:
      const product = action.payload.product as IProduct

      return {
        products: [...state.products, { ...product, amount: 1, subtotal: product.price }],
        total: state.total
      }
    default:
      return state
  }
}
