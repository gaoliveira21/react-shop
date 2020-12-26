import { ICartAction, IProduct } from './types'

export enum CartActionsTypes {
  ADD_SUCCESS = '@cart/ADD_SUCCESS',
  REMOVE = '@cart/REMOVE',
  UPDATE_AMOUNT_SUCCESS = '@cart/UPDATE_AMOUNT_SUCCESS'
}

export const addToCartSuccess = (product: IProduct): ICartAction => {
  return {
    type: CartActionsTypes.ADD_SUCCESS,
    payload: { product }
  }
}
