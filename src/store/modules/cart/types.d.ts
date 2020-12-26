type IProduct = {
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

export type IAction = {
  type: string
  payload: Record<string, unknown>
}
