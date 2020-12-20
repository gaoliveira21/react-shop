import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

import css from './ProductCard.sass'

export const ProductCard: React.FC = (): ReactElement => {
  return (
    <div className={css.ProductCard}>
      <img
        src="https://static.netshoes.com.br/produtos/tenis-adidas-duramo-sl-feminino/56/NQQ-4267-156/NQQ-4267-156_zoom1.jpg?ts=1605623371&ims=326x,%20https://static.netshoes.com.br/produtos/tenis-adidas-duramo-sl-feminino/56/NQQ-4267-156/NQQ-4267-156_zoom1.jpg?ts=1605623371&ims=652x"
        alt="Tênis Adidas Duramo SL Feminino"
        className={css.PC__Image}
      />
      <strong className={css.PC__Name}>
        <Link to="#!" className={css.N__Link}>
          Tênis Adidas Duramo SL Feminino
        </Link>
      </strong>
      <p className={css.PC__Prices}>
        A partir de <br />
        <strong className={css.P__Total}>R$ 159,99</strong> <br />
        <strong className={css.P__Installments}>4x de R$ 40,00</strong>
      </p>
      <ul className={css.PC__Tags}>
        <li className={css.T__Item}>Masculino</li>
        <li className={css.T__Item}>Preto</li>
        <li className={css.T__Item}>Adidas</li>
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
