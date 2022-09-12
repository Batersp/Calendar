import {AppRootStateType} from "../../utils/types";
import {SnackbarType} from "./auth-reducer";

export const selectIsAuth = (state: AppRootStateType): boolean => state.auth.isLoggedIn
export const selectIsLoading = (state: AppRootStateType): boolean => state.auth.isLoading
export const selectSnackbar = (state: AppRootStateType): SnackbarType => state.auth.snackbar
export const selectUserName = (state: AppRootStateType): string => state.auth.Iuser.userName