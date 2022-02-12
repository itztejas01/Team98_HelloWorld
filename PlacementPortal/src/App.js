import React, { Component } from 'react';
import MainAppRoutes from './routes/MainAppRoutes';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';



class App extends Component {
    render(){
        const store = createStore(reducers, {}, applyMiddleware(thunkMiddleware));

        return(
            <Provider store={store}>
            <MainAppRoutes />
            </Provider>
        )
    }
}

export default App;