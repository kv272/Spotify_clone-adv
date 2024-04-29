import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider }  from './utils/stateprovider';
import intialState from './utils/reducer';
import reducer from './utils/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <StateProvider initialState = {intialState} reducer = {reducer} > 
      <App />
    </StateProvider>
  </React.StrictMode>
);