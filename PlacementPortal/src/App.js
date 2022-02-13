import 'react-native-gesture-handler';
import React, {Component} from 'react';
import MainAppRoutes from './routes/MainAppRoutes';
import Login from './components/Login';
import {applyMiddleware, createStore} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import UserType from './components/superadminScreens/UserType';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <UserType />
      </Provider>
    );
  }
}

export default App;
