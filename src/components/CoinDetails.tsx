import React, { useEffect } from 'react'
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { CoinType, DataPointsType } from '../api/coincap-api'
import { getCoinDetailsTC } from '../reducers/details-reducer'
import { AppRootStateType } from '../store'
import { transformationHelper } from './helpers/transformation.helper'
import { LineChart } from './LineChart'

export const CoinDetails: React.FC = () => {
  const coinId = localStorage.getItem('coinId')
  const coinPoints = useSelector<AppRootStateType, DataPointsType[]>(state => state.details.coinPoints)
  const details = useSelector<AppRootStateType, CoinType>(state => state.details.coinDetails)
  const {
    rank,
    symbol,
    name,
    supply,
    maxSupply,
    marketCapUsd,
    volumeUsd24Hr,
    priceUsd,
    changePercent24Hr,
    vwap24Hr,
    explorer,
  } = details

  const dispatch = useDispatch()

  useEffect(() => {
    if (coinId) {
      dispatch(getCoinDetailsTC(coinId))
    }
  }, [coinId, dispatch])

  return (
    <div className="coin-details">
      <div className="app__container">
        <div className="coin-details__container">
          <div className="coin-details__description">          
            <div className="coin__name">{name} ({symbol})</div>
            <div>rank:<span>{rank}</span></div>
            <div className="coin__description">
              <div>
                <div>Price:<span>${(+priceUsd).toFixed(2)}</span></div>
                <div>Market Cap:<span>${transformationHelper(+marketCapUsd)}</span></div>
                <div>Supply:<span>{transformationHelper(+supply)}</span></div>
                <div>VWAP:<span>${transformationHelper(+vwap24Hr)}</span></div>
              </div>
              <div>
                <div>Change:<span>{(+changePercent24Hr).toFixed(2)}%</span></div>
                <div>Volume (24Hr):<span>${transformationHelper(+volumeUsd24Hr)}</span></div>
                <div>Max Supply:<span>{transformationHelper(+maxSupply)}</span></div>
                <div><a href={explorer}>explorer</a></div>
              </div>
            </div>
            <Button className="coin__add_btn">Add</Button>
          </div>
          <div className="coin-details__chart">
            <LineChart coinPoints={coinPoints} />
          </div>
        </div>
      </div>
    </div>
  )
}