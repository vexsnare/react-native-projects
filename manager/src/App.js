import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducer from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyC9iSpYOezePwp3YEraGwzpNmmW8-0FSp4',
      authDomain: 'manager-948d4.firebaseapp.com',
      databaseURL: 'https://manager-948d4.firebaseio.com',
      storageBucket: 'manager-948d4.appspot.com',
      messagingSenderId: '247194992690'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
