import { CartActionsTypes } from './actions'

export type IProduct = {
  id: string,
  image: string,
  title: string,
  amount: number
  price: number,
  subtotal: number
}

export type ICartState = {
  products: IProduct[]
  total: number
}

export type ICartAction = {
  type: CartActionsTypes
  payload: Record<string, unknown>
}

export type ICartDispatch = (args: ICartAction) => ICartAction
