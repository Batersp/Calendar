import {AppRootStateType} from "../../utils/types";

export const selectIsAuth = (state: AppRootStateType) => state.auth.isLoggedIn