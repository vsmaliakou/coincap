import { Dispatch } from "redux"
import { ThunkDispatch } from "redux-thunk"
import { coincapAPI, CoinType, DataPointsType } from "../api/coincap-api"
import { AppActionsType, AppRootStateType } from "../store"

export type InitialStateType = typeof initialState
export type DetailsActionType = ReturnType<typeof setCoinDetailsAC> | ReturnType<typeof setCoinPointsAC>

let initialState = {
  coinDetails: {} as CoinType,
  coinPoints: [] as DataPointsType[]
}

export const detailsReducer = (state = initialState, action: DetailsActionType): InitialStateType => {
  switch (action.type) {
    case 'COINCAP/SET-COIN-DETAILS': {
      return {...state, coinDetails: action.data}
    }
    case 'COINCAP/SET-COIN-POINTS': {
      return {...state, coinPoints: action.data}
    }
    default:
      return state
  }
}

const setCoinDetailsAC = (data: CoinType) => ({type: 'COINCAP/SET-COIN-DETAILS', data} as const)
const setCoinPointsAC = (data: DataPointsType[]) => ({type: 'COINCAP/SET-COIN-POINTS', data} as const)

const getCoinPointsTC = (id: string) => (dispatch: Dispatch) => {
  coincapAPI.getCoinPoints(id)
    .then(resolve => {
      dispatch(setCoinPointsAC(resolve.data.data))
    })
    .catch((e) => {
      console.log(e)
    })
}

export const getCoinDetailsTC = (id: string) => (dispatch: ThunkDispatch<AppRootStateType, null, AppActionsType>) => {
  coincapAPI.getCoinDetails(id)
    .then(resolve => {      
      dispatch(getCoinPointsTC(id))
      dispatch(setCoinDetailsAC(resolve.data.data))
    })
    .catch((e) => {
      console.log(e)
    })
}

