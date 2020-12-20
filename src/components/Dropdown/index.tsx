import React, { ReactElement, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

import css from './Dropdown.sass'

const dropDownItens = [
  { label: 'Preço', selected: false },
  { label: 'Data de cadastro', selected: false },
  { label: 'A-Z', selected: false }
]

export const Dropdown: React.FC = (): ReactElement => {
  const [visible, setVisible] = useState(false)
  const [items] = useState(dropDownItens)
  const [value, setValue] = useState('')

  return (
    <div className={css.Dropdown} onClick={() => setVisible(!visible)}>
      <input
        type="text"
        placeholder="Ordernar por..."
        readOnly
        value={value}
        className={css.D__Input}
      />
      <button type="button" className={css.D__Button}>
        <FaChevronDown />
      </button>
      {visible && (
        <ul className={css.D__Options}>
          {items.map(item => (
            <li
              key={item.label}
              className={`${css.O__Item} ${value === item.label && css['O__Item--active']}`}
              onClick={() => setValue(item.label)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
