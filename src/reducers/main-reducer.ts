import { Dispatch } from "redux"
import { coincapAPI, CoinType, ParamsType } from "../api/coincap-api"

export type InitialStateType = typeof initialState
export type MainActionType = ReturnType<typeof createCoinsCollectionAC>

let initialState = {
  coinsCollection: [] as Array<CoinType>
}

export const mainReducer = (state = initialState, action: MainActionType): InitialStateType => {
  switch (action.type) {
    case 'COINCAP/SET-COINS-COLLECTION': {
      return {...state, coinsCollection: action.data}
    }
    default:
      return state
  }
}

const createCoinsCollectionAC = (data: CoinType[]) => ({type: 'COINCAP/SET-COINS-COLLECTION', data} as const)

export const getCoinsCollectionTC = (params?: ParamsType) => (dispatch: Dispatch) => {
  coincapAPI.getCoinsCollection(params)
    .then(resolve => {
      dispatch(createCoinsCollectionAC(resolve.data.data))
    })
    .catch((e) => {
      console.log(e)
    })
}