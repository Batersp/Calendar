import {slice} from './auth-reducer'
import * as authSelectors from './selectors'

const authReducer = slice.reducer

export {
    authReducer,
    authSelectors
}