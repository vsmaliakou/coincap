import { Button, Input } from 'antd'
import React, { ChangeEvent, useState } from 'react'

type PropsType = {
  currentCoin: any
  toggle: () => void
}

export const Modal: React.FC<PropsType> = (props) => {
  const { currentCoin, toggle } = props
  const [total, setTotal] = useState<number>(0)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const total = +e.target.value * +(currentCoin.price.substring(1))
    setTotal(total)
  }
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__name">{currentCoin.name} ({currentCoin.symbol})</div>
        <div className="modal__description">Price: {currentCoin.price}</div>
        <div className="modal__description">
          <span>Amount:</span>
          <Input type='number' step='0.1' min='0' onChange={handleChange} />
        </div>
        <div className="modal__description">Total: {total.toFixed(2)}</div>
        <div className="modal__btns">
          <Button className="modal__cancel_btn" onClick={toggle}>Cancel</Button>
          <Button className="modal__add_btn">Add</Button>
        </div>
      </div>
    </div>
  )
}