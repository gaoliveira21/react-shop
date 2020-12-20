import React, { ReactElement } from 'react'

import { Header, Dropdown } from '@/components'

import css from './Store.sass'

export const Store: React.FC = (): ReactElement => {
  return (
    <>
      <Header />
      <section className={css.Store}>
        <h1 className={css.S__Title}>Produtos</h1>
        <header className={css.S__Header}>
          <strong className={css.H__TotalItens}>210 produtos encontrados</strong>
          <div className={css.H__DropdownWrapper}>
            <Dropdown />
          </div>
        </header>
        <div className={css.S__Wrapper}>
          <aside className={css.W__Filters}>
            <strong className={css.F__Title}>Filtrar por:</strong>
            <div className={css.F__Block}>
              <strong className={css.B__Title}>Gênero</strong>
              <ul className={css.B__List}>
                <li className={css.L__Item}>
                  <input id="male" type="checkbox"/>
                  <label htmlFor="male">Masculino</label>
                </li>
                <li className={css.L__Item}>
                  <input id="female" type="checkbox"/>
                  <label htmlFor="female">Feminino</label>
                </li>
                <li className={css.L__Item}>
                  <input id="childish" type="checkbox"/>
                  <label htmlFor="childish">Infantil</label>
                </li>
              </ul>
            </div>
            <div className={css.F__Block}>
              <strong className={css.B__Title}>Marca</strong>
              <ul className={css.B__List}>
                <li className={css.L__Item}>
                  <input id="puma" type="checkbox"/>
                  <label htmlFor="puma">Puma</label>
                </li>
                <li className={css.L__Item}>
                  <input id="adidas" type="checkbox"/>
                  <label htmlFor="adidas">Adidas</label>
                </li>
                <li className={css.L__Item}>
                  <input id="nike" type="checkbox"/>
                  <label htmlFor="nike">Nike</label>
                </li>
              </ul>
            </div>
            <div className={css.F__Block}>
              <strong className={css.B__Title}>Cor</strong>
              <ul className={css.B__List}>
                <li className={css.L__Item}>
                  <input id="black" type="checkbox"/>
                  <label htmlFor="black">Preto</label>
                </li>
                <li className={css.L__Item}>
                  <input id="white" type="checkbox"/>
                  <label htmlFor="white">Branco</label>
                </li>
                <li className={css.L__Item}>
                  <input id="red" type="checkbox"/>
                  <label htmlFor="red">Vermelho</label>
                </li>
                <li className={css.L__Item}>
                  <input id="blue" type="checkbox"/>
                  <label htmlFor="blue">Azul</label>
                </li>
                <li className={css.L__Item}>
                  <input id="pink" type="checkbox"/>
                  <label htmlFor="pink">Rosa</label>
                </li>
              </ul>
            </div>
          </aside>
          <div className={css.W__Products}>
          </div>
        </div>
      </section>
    </>
  )
}
