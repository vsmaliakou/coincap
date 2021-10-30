import { Dispatch } from "redux"
import { coincapAPI, PackageType, ParamsType } from "../api/coincap-api"

export type InitialStateType = typeof initialState
export type MainActionType = ReturnType<typeof createAssetsAC>

let initialState = {
  data: [] as Array<PackageType>
}

export const mainReducer = (state = initialState, action: MainActionType): InitialStateType => {
  switch (action.type) {
    case 'COINCAP/SET-DATA': {
      return {...state, data: action.data}
    }
    default:
      return state
  }
}

const createAssetsAC = (data: PackageType[]) => ({type: 'COINCAP/SET-DATA', data} as const)

export const getDataTC = (params?: ParamsType) => (dispatch: Dispatch) => {
  coincapAPI.getAssets(params)
    .then(resolve => {
      dispatch(createAssetsAC(resolve.data.data))
    })
    .catch((e) => {
      console.log(e)
    })
}