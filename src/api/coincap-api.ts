import axios from 'axios'

type ResponseType = {
  data: PackageType[]
  timestamp: number
}

export type PackageType = {
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
}

export type ParamsType = {
  limit: number
  offset: number
}

const instance = axios.create({
  baseURL: 'https://api.coincap.io/v2',
 })

export const coincapAPI = {
   getAssets(params: any) {
       return instance.get<ResponseType>('/assets', params)
   }
}

 