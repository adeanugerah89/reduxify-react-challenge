import { createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import ListMenuReducer from '../reducers/ListMenuReducer'
const middleware = applyMiddleware(logger, thunk)

const store = createStore(ListMenuReducer, middleware)

export default store