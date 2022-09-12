import {AppDispatchType, AppRootStateType} from "../../utils/types";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const useAppDispatch: () => AppDispatchType = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector