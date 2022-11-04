import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
import 'tachyons';
import reportWebVitals from './reportWebVitals';
import { searchRobots, requestRobots } from "./Redux/reducers";
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';

  //////////CONFIGURANDO REDUX STORE//////////////////
  const logger = createLogger();
  
  const store = configureStore({
    reducer: {searchRobots,requestRobots},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
  });
  ////////////////////////////////////////////////////

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
