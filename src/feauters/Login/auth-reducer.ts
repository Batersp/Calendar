import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {authApi} from "../../api/authApi";

export type InitStateType = {
    isLoggedIn: boolean
    Iuser: IUserType
    isLoading: boolean
    error: string
}

export type IUserType = {
    userName: string
    password: string
}

const initState: InitStateType = {
    isLoggedIn: false,
    Iuser: {} as IUserType,
    isLoading: false,
    error: ''
}

export const Login = createAsyncThunk(
    'auth/login',
    async (param: IUserType, {dispatch}) => {
        try {

            dispatch(setIsLoading({setIsLoading: true}))
            setTimeout(async () => {

                const response = await authApi.login()
                const mockUser = response.data.find(user => user.userName === param.userName && user.password === param.password)
                if (mockUser) {

                    dispatch(setUser({user: {userName: param.userName, password: param.password}}))
                    dispatch(setIsLoggedIn({isLoggedIn: true}))
                    dispatch(setError({error: ''}))
                } else {

                    dispatch(setError({error: 'Чел, какая-то ошибка, походу пароль или логин неверный'}))
                }
                dispatch(setIsLoading({setIsLoading: false}))
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
            }
        }
    }
)

export const {setIsLoading, setUser, setIsLoggedIn, setError} = slice.actions




