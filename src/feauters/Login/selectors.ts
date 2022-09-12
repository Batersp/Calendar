import {AppRootStateType} from "../../utils/types";

export const selectIsAuth = (state: AppRootStateType): boolean => state.auth.isLoggedIn
export const selectIsLoading = (state: AppRootStateType): boolean => state.auth.isLoading