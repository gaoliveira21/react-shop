import React, { ReactElement } from 'react'
import { FaShoppingBag, FaShoppingCart, FaSignInAlt, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import css from './Header.sass'

export const Header: React.FC = (): ReactElement => {
  return (
    <header className={css.Header}>
      <div>
        Logo
      </div>
      <div className={css.H__SearchWrapper}>
        <input
          type="text"
          placeholder="Buscar um produto..."
          className={css.SW__Input}
        />
        <button
          type="button"
          className={css.SW__Button}
        >
          <FaSearch />
        </button>
      </div>
      <ul className={css.H__NavList}>
        <li className={css.NL__Item}>
          <Link to="#!" className={css.I__Link}>
            <FaShoppingBag className={css.L__Icon} />
            Produtos
          </Link>
        </li>
        <li className={css.NL__Item}>
          <Link to="#!" className={css.I__Link}>
            <div className={css.L__Wrapper}>
              <FaShoppingCart className={css.L__Icon} />
              <span className={css.L__Badge}>3</span>
            </div>
            Carrinho
          </Link>
        </li>
        <li className={css.NL__Item}>
          <Link to="#!" className={css.I__Link}>
            <FaSignInAlt className={css.L__Icon} />
            Entrar
          </Link>
        </li>
      </ul>
    </header>
  )
}
