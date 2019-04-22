import React, { Component } from 'react';
import { Provider } from 'react-redux';
import colors from '../Utilities/colors';
import './App.css';
import 'tachyons';
// import Dashboard from '../Components/Dashboard/Dashboard.js';
import AppRouter from '../Router/AppRouter';
import configureStore from '../store/configureStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <div className="App" style={{ background: colors.purp }} >
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </div>
    );
  }
}

export default App;
