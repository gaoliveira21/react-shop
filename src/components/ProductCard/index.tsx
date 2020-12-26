import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

import { IProductResponse } from '@/shared/definitions/product'

import css from './ProductCard.sass'

type IProps = {
  data: IProductResponse
}

export const ProductCard: React.FC<IProps> = ({ data }): ReactElement => {
  return (
    <div className={css.ProductCard}>
      <img
        src={data.image}
        alt={data.title}
        className={css.PC__Image}
      />
      <strong className={css.PC__Name}>
        <Link to="#!" className={css.N__Link}>
          {data.title}
        </Link>
      </strong>
      <p className={css.PC__Prices}>
        A partir de <br />
        <strong className={css.P__Total}>{data.price}</strong> <br />
        <strong className={css.P__Installments}>10x {(data.price / 10).toFixed(2)}</strong>
      </p>
      <ul className={css.PC__Tags}>
        {data.tags.map(tag => (
          <li key={tag} className={css.T__Item}>{tag}</li>
        ))}
      </ul>
      <button
        type="button"
        className={css.PC__BuyButton}
      >
        <strong className={css.B__Text}>
          COMPRAR
        </strong>
        <div className={css.B__Cart}>
          <FaShoppingCart />
          <span className={css.C__Badge}>3</span>
        </div>
      </button>
    </div>
  )
}
