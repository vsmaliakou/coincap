import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { CoinType, DataPointsType } from '../api/coincap-api'
import { getCoinDetailsTC } from '../reducers/details-reducer'
import { AppRootStateType } from '../store'
import { transformationHelper } from './helpers/transformation.helper'
import { LineChart } from './LineChart'
import { Modal } from './Modal'

export const CoinDetails: React.FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const coinId = localStorage.getItem('coinId')
  const coinPoints = useSelector<AppRootStateType, DataPointsType[]>(state => state.details.coinPoints)
  const details = useSelector<AppRootStateType, CoinType>(state => state.details.coinDetails)
  const currentCoin = {
    key: details.id,
    rank: details.rank,
    name: details.name,
    price: '$' + (+details.priceUsd).toFixed(2),
    marketCap: '$' + transformationHelper(+details.marketCapUsd),
    vwap: '$' + (+details.vwap24Hr).toFixed(2),
    supply: transformationHelper(+details.supply),
    maxSupply: transformationHelper(+details.maxSupply),
    volume: '$' + transformationHelper(+details.volumeUsd24Hr),
    change: (+details.changePercent24Hr).toFixed(2) + '%',
    symbol: details.symbol,
    explorer: details.explorer
  }

  const dispatch = useDispatch()

  useEffect(() => {
    if (coinId) {
      dispatch(getCoinDetailsTC(coinId))
    }
  }, [coinId, dispatch])

  const toggle = () => {
    setIsClicked(!isClicked)
  }

  return (
    <div className="coin-details">
      <div className="app__container">
        <div className="coin-details__container">
          <div className="coin-details__description">          
            <div className="coin__name">{currentCoin.name} ({currentCoin.symbol})</div>
            <div>rank:<span>{currentCoin.rank}</span></div>
            <div className="coin__description">
              <div>
                <div>Price:<span>{currentCoin.price}</span></div>
                <div>Market Cap:<span>{currentCoin.marketCap}</span></div>
                <div>Supply:<span>{currentCoin.supply}</span></div>
                <div>VWAP:<span>{currentCoin.vwap}</span></div>
              </div>
              <div>
                <div>Change:<span>{currentCoin.change}</span></div>
                <div>Volume (24Hr):<span>{currentCoin.volume}</span></div>
                <div>Max Supply:<span>{currentCoin.maxSupply}</span></div>
                <div><a href={currentCoin.explorer}>explorer</a></div>
              </div>
            </div>
            <Button className="coin__add_btn" onClick={toggle}>Add</Button>
          </div>
          <div className="coin-details__chart">
            <LineChart coinPoints={coinPoints} />
          </div>
        </div>
      </div>
      {isClicked && <Modal currentCoin={currentCoin} toggle={toggle} />}
    </div>
  )
}