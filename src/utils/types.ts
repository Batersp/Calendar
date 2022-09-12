import {rootReducer} from "../app/store";
import {ThunkDispatch} from "redux-thunk";
import {AppActionsType} from "../common/types/ActionTypes";

export type RootReducerType = typeof rootReducer
export type AppRootStateType = ReturnType<RootReducerType>
export type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, AppActionsType>