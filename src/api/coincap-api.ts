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

const instance = axios.create({
  baseURL: 'https://api.coincap.io/v2',
 })

export const coincapAPI = {
   getAssets() {
       return instance.get<ResponseType>('/assets')
   }
}

 