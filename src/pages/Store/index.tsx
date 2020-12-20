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
      </section>
    </>
  )
}
