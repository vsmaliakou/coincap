import { Button, Input } from 'antd'
import React, { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCoinTC } from '../reducers/portfolio-reducer'

type PropsType = {
  currentCoin: any
  toggle: () => void
}

export const Modal: React.FC<PropsType> = (props) => {
  const { currentCoin, toggle } = props
  const [amount, setAmount] = useState<string>('')
  const [total, setTotal] = useState<number>(0)

  const dispatch = useDispatch()

  const sum = (amount: string) => {
    const total = +amount * +(currentCoin.price.substring(1))
    setTotal(total)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value)
    sum(e.target.value)
  }

  const handleClick = () => {
    dispatch(addCoinTC(currentCoin, amount, total))
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
        <div className="modal__description">Total: ${total.toFixed(2)}</div>
        <div className="modal__btns">
          <Button className="modal__cancel_btn" onClick={toggle}>Cancel</Button>
          <Button className="modal__add_btn" onClick={handleClick}>Add</Button>
        </div>
      </div>
    </div>
  )
}