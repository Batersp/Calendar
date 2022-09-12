import {setAppSnackbarValue, setError, setIsLoading, setIsLoggedIn, setUser} from "../../feauters/Login/auth-reducer";

export type AppActionsType =
    | ReturnType<typeof setIsLoading>
    | ReturnType<typeof setUser>
    | ReturnType<typeof setIsLoggedIn>
    | ReturnType<typeof setError>
    | ReturnType<typeof setAppSnackbarValue>

