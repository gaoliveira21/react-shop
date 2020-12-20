import React, { ReactElement } from 'react'
import { MdRemove, MdAdd, MdDeleteForever } from 'react-icons/md'

import { Header } from '@/components'

import css from './Cart.sass'

export const Cart: React.FC = (): ReactElement => {
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
                <th />
              </tr>
            </thead>
            <tbody>
              <tr className={css.T__Row}>
                <td className={css.T__Data}>
                  <img
                    src="https://static.netshoes.com.br/produtos/tenis-adidas-duramo-sl-feminino/56/NQQ-4267-156/NQQ-4267-156_zoom1.jpg?ts=1605623371&ims=326x,%20https://static.netshoes.com.br/produtos/tenis-adidas-duramo-sl-feminino/56/NQQ-4267-156/NQQ-4267-156_zoom1.jpg?ts=1605623371&ims=652x"
                    alt="Tênis Adidas Duramo SL Feminino"
                    className={css.D__Image}
                  />
                </td>
                <td className={css.T__Data}>Tênis Adidas Duramo SL Feminino</td>
                <td className={css.T__Data}>
                  <div className={css.D__Amount}>
                    <button type="button" className={css.A__Button}>
                      <MdAdd />
                    </button>
                    <input type="text" readOnly value="1" className={css.A__Input} />
                    <button type="button" className={css.A__Button}>
                      <MdRemove />
                    </button>
                  </div>
                </td>
                <td className={css.T__Data}>R$ 159,99</td>
                <td className={css.T__Data}>R$ 159,99</td>
                <td className={css.T__Data}>
                  <button className={css.D__Remove} type="button">
                    <MdDeleteForever />
                  </button>
                </td>
              </tr>
              <tr className={css.T__Row}>
                <td className={css.T__Data}>
                  <img
                    src="https://static.netshoes.com.br/produtos/tenis-adidas-duramo-sl-feminino/56/NQQ-4267-156/NQQ-4267-156_zoom1.jpg?ts=1605623371&ims=326x,%20https://static.netshoes.com.br/produtos/tenis-adidas-duramo-sl-feminino/56/NQQ-4267-156/NQQ-4267-156_zoom1.jpg?ts=1605623371&ims=652x"
                    alt="Tênis Adidas Duramo SL Feminino"
                    className={css.D__Image}
                  />
                </td>
                <td className={css.T__Data}>Tênis Adidas Duramo SL Feminino</td>
                <td className={css.T__Data}>
                  <div className={css.D__Amount}>
                    <button type="button" className={css.A__Button}>
                      <MdAdd />
                    </button>
                    <input type="text" readOnly value="1" className={css.A__Input} />
                    <button type="button" className={css.A__Button}>
                      <MdRemove />
                    </button>
                  </div>
                </td>
                <td className={css.T__Data}>R$ 159,99</td>
                <td className={css.T__Data}>R$ 159,99</td>
                <td className={css.T__Data}>
                  <button className={css.D__Remove} type="button">
                    <MdDeleteForever />
                  </button>
                </td>
              </tr>
              <tr className={css.T__Row}>
                <td className={css.T__Data}>
                  <img
                    src="https://static.netshoes.com.br/produtos/tenis-adidas-duramo-sl-feminino/56/NQQ-4267-156/NQQ-4267-156_zoom1.jpg?ts=1605623371&ims=326x,%20https://static.netshoes.com.br/produtos/tenis-adidas-duramo-sl-feminino/56/NQQ-4267-156/NQQ-4267-156_zoom1.jpg?ts=1605623371&ims=652x"
                    alt="Tênis Adidas Duramo SL Feminino"
                    className={css.D__Image}
                  />
                </td>
                <td className={css.T__Data}>Tênis Adidas Duramo SL Feminino</td>
                <td className={css.T__Data}>
                  <div className={css.D__Amount}>
                    <button type="button" className={css.A__Button}>
                      <MdAdd />
                    </button>
                    <input type="text" readOnly value="1" className={css.A__Input} />
                    <button type="button" className={css.A__Button}>
                      <MdRemove />
                    </button>
                  </div>
                </td>
                <td className={css.T__Data}>R$ 159,99</td>
                <td className={css.T__Data}>R$ 159,99</td>
                <td className={css.T__Data}>
                  <button className={css.D__Remove} type="button">
                    <MdDeleteForever />
                  </button>
                </td>
              </tr>
              <tr className={css.T__Row}>
                <td className={css.T__Data}>
                  <img
                    src="https://static.netshoes.com.br/produtos/tenis-adidas-duramo-sl-feminino/56/NQQ-4267-156/NQQ-4267-156_zoom1.jpg?ts=1605623371&ims=326x,%20https://static.netshoes.com.br/produtos/tenis-adidas-duramo-sl-feminino/56/NQQ-4267-156/NQQ-4267-156_zoom1.jpg?ts=1605623371&ims=652x"
                    alt="Tênis Adidas Duramo SL Feminino"
                    className={css.D__Image}
                  />
                </td>
                <td className={css.T__Data}>Tênis Adidas Duramo SL Feminino</td>
                <td className={css.T__Data}>
                  <div className={css.D__Amount}>
                    <button type="button" className={css.A__Button}>
                      <MdAdd />
                    </button>
                    <input type="text" readOnly value="1" className={css.A__Input} />
                    <button type="button" className={css.A__Button}>
                      <MdRemove />
                    </button>
                  </div>
                </td>
                <td className={css.T__Data}>R$ 159,99</td>
                <td className={css.T__Data}>R$ 159,99</td>
                <td className={css.T__Data}>
                  <button className={css.D__Remove} type="button">
                    <MdDeleteForever />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <aside className={css.W__Payments}></aside>
        </div>
      </section>
    </>
  )
}
