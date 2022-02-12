import React, { Component } from 'react';
import MainAppRoutes from './routes/MainAppRoutes';
import Login from "./components/Login";


class App extends Component {
    render(){
        return(
            <MainAppRoutes />
        )
    }
}

export default App;