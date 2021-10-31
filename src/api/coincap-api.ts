import axios from 'axios'

type CollectionType = {
  data: CoinType[]
  timestamp: number
}

type DetailsType = {
  data: CoinType
  timestamp: number
}

type PointsType = {
  data: DataPointsType[]
  timestamp: number
}

export type CoinType = {
  id: string
  rank: string
  symbol: string
  name: string
  supply: string
  maxSupply: string
  marketCapUsd: string
  volumeUsd24Hr: string
  priceUsd: string
  changePercent24Hr: string
  vwap24Hr: string
  explorer: string
}

export type ParamsType = {
  limit: number
  offset: number
}

export type DataPointsType = {
  circulatingSupply: string
  date: string
  priceUsd: string
  time: number
}

const instance = axios.create({
  baseURL: 'https://api.coincap.io/v2',
 })

export const coincapAPI = {
  getCoinsCollection(params: any) {
    return instance.get<CollectionType>('/assets', params)
  },
  getCoinDetails(id: string) {
    return instance.get<DetailsType>(`/assets/${id}`)
  },
  getCoinPoints(id: string) {
    return instance.get<PointsType>(`/assets/${id}/history?interval=h1`)
  }
}

 