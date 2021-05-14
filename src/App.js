import React from "react";
import Navigation from "./routes";
import { Provider } from 'react-redux'
import configureStore from './store'
const store = configureStore();
const App = () => {
    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    )
}

export default App;