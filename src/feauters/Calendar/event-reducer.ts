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

export const createEvent = createAsyncThunk(
    'event/createEvent',
    async (param: ModalFormType, {dispatch}) => {
        try {
            const events = localStorage.getItem('events') || '[]'
            const json = JSON.parse(events) as ModalFormType[]
            json.push(param)
            dispatch(setEvents({events: json}))
            localStorage.setItem('events', JSON.stringify(json))

        } catch (e) {

        }
    }
)

export const fetchEvents = createAsyncThunk(
    'event/fetchEvents',
    async (param: {userName: string | null}, {dispatch}) => {
        try {
            const events = localStorage.getItem('events') || '[]'
            const json = JSON.parse(events) as ModalFormType[]
            const currentUserEvents = json.filter(el => el.guest === param.userName || el.author === param.userName)
            dispatch(setEvents({events: currentUserEvents}))
        } catch (e) {

        }
    }
)

export const slice = createSlice({
        name: 'event',
        initialState: initState,
        reducers: {
            setGuests: (state, action: PayloadAction<{ guests: IUserType[] }>) => {
                state.guests = action.payload.guests
            },
            setEvents: (state, action: PayloadAction<{ events: ModalFormType[] }>) => {
                state.events = action.payload.events
            }
        }
    }
)

export const {setGuests, setEvents} = slice.actions