import React from "react";
import Navigation from "./routes";
import { Provider } from 'react-redux'
import appReducer from "./store/reducers";
import ReduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
const store = createStore(
    appReducer,
    applyMiddleware(ReduxThunk)
)
const App = () => {
    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    )
}

export default App;