import { Dispatch } from "redux"
import { ThunkDispatch } from "redux-thunk"
import { AppActionsType, AppRootStateType } from "../store"

export type InitialStateType = typeof initialState
export type PortfolioActionType = ReturnType<typeof setDataAC>

let initialState = {
  data: [] as any
}

export const portfolioReducer = (state = initialState, action: PortfolioActionType): InitialStateType => {
  switch (action.type) {
    case 'COINCAP/SET-DATA': {
      return {...state, data: action.data}
    }
    default:
      return state
  }
}

const setDataAC = (data: any) => ({type: 'COINCAP/SET-DATA', data} as const)

export const getDataTC = () => (dispatch: Dispatch) => {
  const data = localStorage.getItem('portfolio')
  data && dispatch(setDataAC(JSON.parse(data)))
}

export const addCoinTC = (coin: any, amount: string, total: number) => (dispatch: Dispatch) => {
  const data = localStorage.getItem('portfolio')
  const newCoin = {
    key: coin.key,
    rank: coin.rank,
    name: coin.name,
    price: coin.price,
    marketCap: coin.marketCap,
    vwap: coin.vwap,
    supply: coin.supply,
    volume: coin.volume,
    change: coin.change,
    symbol: coin.symbol,
    amount: +amount,
    total: total.toFixed(2)
  }
  if (data) {
    let dataCopy = JSON.parse(data)
    const coin = dataCopy.find((item: any) => item.name === newCoin.name)
    if (coin) {
      dataCopy = dataCopy.filter((item: any) => item.name !== coin.name)
      const newData = JSON.stringify([newCoin, ...dataCopy])
      localStorage.setItem('portfolio', newData)
    } else {
      const newData = JSON.stringify([newCoin, ...JSON.parse(data)])
      localStorage.setItem('portfolio', newData)
    }
  } else {
    const newData = JSON.stringify([newCoin])
    localStorage.setItem('portfolio', newData)
  }
}

export const removeCoinTC = (key: string) => (dispatch: ThunkDispatch<AppRootStateType, null, AppActionsType>) => {
  const data = localStorage.getItem('portfolio')
  if (data) {
    const newData = JSON.parse(data).filter((item: any) => item.key !== key)
    localStorage.setItem('portfolio', JSON.stringify(newData))
  }
  dispatch(getDataTC())
}
