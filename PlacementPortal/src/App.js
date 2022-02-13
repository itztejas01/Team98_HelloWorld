import 'react-native-gesture-handler';
import React, {Component} from 'react';
import MainAppRoutes from './routes/MainAppRoutes';
import {LogBox} from 'react-native'
import Login from './components/Login';
import {applyMiddleware, createStore} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

LogBox.ignoreAllLogs()

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <MainAppRoutes />
      </Provider>
    );
  }
}

export default App;
