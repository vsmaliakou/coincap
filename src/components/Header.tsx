import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { CoinType } from '../api/coincap-api'
import { AppRootStateType } from '../store'
import { Portfolio } from './Portfolio'

export const Header: React.FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false)
  const coinsCollection = useSelector<AppRootStateType, CoinType[]>(state => state.main.coinsCollection)
  const data = localStorage.getItem('portfolio')
  const popular = coinsCollection.slice(0, 3)

  const toggle = () => {
    setIsOpened(!isOpened)
  }

  const getUserPortfolioCost = () => {
    if (data) {
      const costCollection = JSON.parse(data).map((item: any) => {
        return +item.total
      })
      return costCollection.reduce((acc: number, cur: number) => acc + cur).toFixed(2)
    }
  }

  return (
  <div className="header">
    <div className="app__container">
      <div className="header__container">
        <div className="header__popular">
          {popular.map(item => {
            return (
              <div key={item.id}>
                <span>{item.symbol}</span>
                <span className="header__popular_price">{'$' + (+item.priceUsd).toFixed(2)}</span>
              </div>
            )
          })}
        </div>
        <div className="header__portfolio_wrapper">
          <span>(${getUserPortfolioCost()})</span>
          <button className="header__portfolio" onClick={toggle}></button>
        </div>
      </div>
    </div>
    {isOpened && <Portfolio toggle={toggle} />}
  </div>
  )
}