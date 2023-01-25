import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//Import config function of App Store
import { createAppStore, createAsyncAppStore } from './store/config/storeConfig';
//Redux imports
import { Provider } from 'react-redux';
import AppReduxSagas from './AppReduxSagas';

const root = ReactDOM.createRoot(document.getElementById('root'));
//* Creating the App Store
let appStore = createAppStore();
let asyncAppStore = createAsyncAppStore();


root.render(
  <Provider store={asyncAppStore}>     
      {/* <App /> */}
      <AppReduxSagas />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
