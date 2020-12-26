export type IProductResponse = {
  tags: string[]
  title: string
  price: number
  image: string
  id: string
}

export interface IParsedProducts extends IProductResponse {
  formattedPrice: string
  formattedInstallments: string
}
