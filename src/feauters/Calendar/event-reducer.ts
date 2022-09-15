import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {snackbarType} from "../../common/enums/SnackbarType";
import {IUserType, setAppSnackbarValue, setError, setIsLoading, setIsLoggedIn, setUser} from "../Login/auth-reducer";
import {ModalFormType} from "../../common/components/Modal/Modal";
import {authApi} from "../../api/authApi";

export type initStateType = {
    guests: IUserType[]
    events: ModalFormType[]
}


const initState: initStateType = {
    guests: [],
    events: []
}

export const fetchGuests = createAsyncThunk(
    'event/fetchGuests',
    async (param, {dispatch}) => {
        try {
            const response = await authApi.fetchGuests()
            dispatch(setGuests({guests: response.data}))
        } catch (e) {

        }
    }
)

export const slice = createSlice({
        name: 'event',
        initialState: initState,
        reducers: {
            setGuests: (state, action: PayloadAction<{guests: IUserType[]}>) => {
                state.guests = action.payload.guests
            },
            setEvent: (state, action: PayloadAction<{event: ModalFormType}>) => {
                state.events.push(action.payload.event)
            }
        }
    }
)

export const {setGuests, setEvent} = slice.actions