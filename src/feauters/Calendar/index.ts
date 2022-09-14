import {slice} from './event-reducer'
import * as eventSelectors from './selectors'

const eventReducer = slice.reducer

export {
    eventReducer,
    eventSelectors
}