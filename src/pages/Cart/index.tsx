import React, { ReactElement } from 'react'
import { MdRemove, MdAdd, MdDeleteForever } from 'react-icons/md'
import { useSelector } from 'react-redux'

import { Header } from '@/components'
import { IRootState } from '@/store/store'

import css from './Cart.sass'

export const Cart: React.FC = (): ReactElement => {
  const cart = useSelector((state: IRootState) => state.cart)

  return (
    <>
      <Header />
      <section className={css.Cart}>
        <h1 className={css.C__Title}>Meu Carrinho</h1>
        <div className={css.C__Wrapper}>
          <table className={css.W__Table}>
            <thead>
              <tr>
                <th className={css.T__Head} />
                <th className={css.T__Head}>Item</th>
                <th className={css.T__Head}>Quantidade</th>
                <th className={css.T__Head}>Preço</th>
                <th className={css.T__Head}>Subtotal</th>
                <th className={css.T__Head} />
              </tr>
            </thead>
            <tbody>
              {cart.products.map(product => (
                <tr key={product.id} className={css.T__Row}>
                  <td className={css.T__Data}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className={css.D__Image}
                    />
                  </td>
                  <td className={css.T__Data}>{product.title}</td>
                  <td className={css.T__Data}>
                    <div className={css.D__Amount}>
                      <button type="button" className={css.A__Button}>
                        <MdAdd />
                      </button>
                      <input type="text" readOnly value={product.amount} className={css.A__Input} />
                      <button type="button" className={css.A__Button}>
                        <MdRemove />
                      </button>
                    </div>
                  </td>
                  <td className={css.T__Data}>{product.price}</td>
                  <td className={css.T__Data}>{product.subtotal}</td>
                  <td className={css.T__Data}>
                    <button className={css.D__Remove} type="button">
                      <MdDeleteForever />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <aside className={css.W__Purchase}>
            <div className={css.P__Wrapper}>
              <h2 className={css.P__Title}>Resumo da compra</h2>
              <div className={css.P__Details}>
                <strong>Descontos:</strong>
                <strong className={css.D__Text}>R$ 0,00</strong>
              </div>
              <div className={css.P__Details}>
                <strong>Valor total:</strong>
                <strong className={css.D__Text}>{cart.total}</strong>
              </div>
              <button type="button" className={`${css.P__FinishButton} ${css.P__Button}`}>
                Finalizar compra
              </button>
              <button type="button" className={`${css.P__BuyButton} ${css.P__Button}`}>
                Continuar comprando
              </button>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
