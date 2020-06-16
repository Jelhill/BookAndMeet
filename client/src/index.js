import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore } from "redux"
import bookingReducer from "./Reducers/bookingReducer"
import roomReducer from "./Reducers/bookingReducer"
import { BrowserRouter as Router } from 'react-router-dom';
import catReducer from './Components/core copy/reducers/catReducer';
import RangeReducer from './Components/core copy/reducers/RangeReducer';
import store from './Components/core copy/store';
// import 'tachyons';


// const rootReducer = combineReducers({bookingReducer, roomReducer, catReducer, RangeReducer})
// const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
          <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')                
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
