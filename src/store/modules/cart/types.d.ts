import { CartActionsTypes } from './actions'
import { IParsedProducts } from '@/shared/definitions/product'

export interface IProduct extends IParsedProducts {
  subtotal: number
  amount: number
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
