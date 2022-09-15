import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {authApi} from "../../api/authApi";
import {snackbarType} from "../../common/enums/SnackbarType";

export type InitStateType = {
    isLoggedIn: boolean
    Iuser: IUserType
    isLoading: boolean
    error: string
    snackbar: SnackbarType
}

export type SnackbarType = {
    type: snackbarType | undefined
    message: string | null
}

export type IUserType = {
    userName: string | null
}

const initState: InitStateType = {
    isLoggedIn: false,
    Iuser: {} as IUserType,
    isLoading: false,
    error: '',
    snackbar: {} as SnackbarType
}

export const Login = createAsyncThunk(
    'auth/login',
    async (param: IUserType, {dispatch}) => {
        try {

            dispatch(setIsLoading({setIsLoading: true}))
            setTimeout(async () => {

                const response = await authApi.login()
                const mockUser = response.data.find(user => user.userName === param.userName )
                if (mockUser) {

                    dispatch(setUser({user: {userName: param.userName}}))
                    dispatch(setIsLoggedIn({isLoggedIn: true}))
                    dispatch(setError({error: ''}))
                    localStorage.setItem('auth', 'true')
                    if(param.userName) {
                        localStorage.setItem('userName', param.userName)
                    }
                    dispatch(setAppSnackbarValue({type: snackbarType.SUCCESS, message: 'Вы успешно авторизовались'}))
                } else {
                    dispatch(setError({error: 'Чел, какая-то ошибка, походу пароль или логин неверный'}))
                    dispatch(setAppSnackbarValue({type: snackbarType.ERROR, message: 'неверный логин или пароль'}))
                }
                dispatch(setIsLoading({setIsLoading: false}))
            }, 3000)

        } catch (e) {

        }
    }
)

export const Logout = createAsyncThunk(
    'auth/login',
    async (param, {dispatch}) => {
        try {
            dispatch(setIsLoading({setIsLoading: true}))
            setTimeout(async () => {
                dispatch(setUser({user: {} as IUserType}))
                dispatch(setIsLoggedIn({isLoggedIn: false}))
                dispatch(setIsLoading({setIsLoading: false}))
                localStorage.removeItem('auth')
                localStorage.removeItem('userName')
                dispatch(setAppSnackbarValue({type: snackbarType.SUCCESS, message: 'Вы успешно вышли'}))
            }, 3000)

        } catch (e) {

        }
    }
)

export const slice = createSlice({
        name: 'auth',
        initialState: initState,
        reducers: {
            setIsLoading: (state, action: PayloadAction<{setIsLoading: boolean}>) => {
                state.isLoading = action.payload.setIsLoading
            },
            setUser: (state, action: PayloadAction<{ user: IUserType }>) => {
                state.Iuser = action.payload.user
            },
            setIsLoggedIn: (state, action: PayloadAction<{isLoggedIn: boolean}>) => {
                state.isLoggedIn = action.payload.isLoggedIn
            },
            setError: (state, action: PayloadAction<{ error: string }>) => {

                state.error = action.payload.error
            },
            setAppSnackbarValue(
                state,
                action: PayloadAction<{ type: snackbarType | undefined; message: string | null }>,
            ) {
                state.snackbar = action.payload;
            }
        }
    }
)

export const {setIsLoading, setUser, setIsLoggedIn, setError, setAppSnackbarValue} = slice.actions




