import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import { Provider } from 'react-redux';
import App from './components/App/App'
import store from './store';

const root = ReactDOM.createRoot(document.querySelector('.container'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);