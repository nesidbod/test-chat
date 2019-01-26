import { combineReducers } from 'redux'
import auth from './reducers/authReducer'
import data from './reducers/dataReducer'

const reducers = combineReducers({
    auth,
    data
})

export default reducers
