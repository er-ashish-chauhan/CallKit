import { combineReducers } from 'redux'

import userReducer from './userReducer';

const appReducer = combineReducers({
    userReducer,
})

const rootReducer = (state, action) => {
    if (action.type === 'app/DESTROY') {
        state = {
            navigation: state.navigation
        }
    }

    return appReducer(state, action)
}

export default rootReducer