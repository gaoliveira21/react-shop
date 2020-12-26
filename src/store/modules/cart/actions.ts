import { ICartAction } from './types'
import { IParsedProducts } from '@/shared/definitions/product'

export enum CartActionsTypes {
  ADD_SUCCESS = '@cart/ADD_SUCCESS',
  REMOVE = '@cart/REMOVE',
  UPDATE_AMOUNT_SUCCESS = '@cart/UPDATE_AMOUNT_SUCCESS'
}

export const addToCartSuccess = (product: IParsedProducts): ICartAction => {
  return {
    type: CartActionsTypes.ADD_SUCCESS,
    payload: { product }
  }
}
