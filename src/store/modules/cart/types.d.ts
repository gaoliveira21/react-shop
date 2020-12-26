type IProduct = {
  id: string,
  image: string,
  title: string,
  amount: number
  price: number,
  subtotal: number
}

export type IState = {
  cart: IProduct[]
}

export type IAction = {
  type: string
  payload: Record<string, unknown>
}
