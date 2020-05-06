import {combineReducers} from 'redux'
import auxReducer from './auxReducer'
import loginReducer from './loginReducer'
import dataUserReducer from './dataUserReducer'

export default combineReducers({
    auxReducer,
    loginReducer,
    dataUserReducer
})