import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from 'redux-thunk'
import { DetailsActionType, detailsReducer } from "./reducers/details-reducer"
import { MainActionType, mainReducer } from "./reducers/main-reducer"
import { PortfolioActionType, portfolioReducer } from "./reducers/portfolio-reducer"

export const rootReducer = combineReducers({
  main: mainReducer,
  details: detailsReducer,
  portfolio: portfolioReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof store.getState>

export type AppActionsType = MainActionType | DetailsActionType | PortfolioActionType
