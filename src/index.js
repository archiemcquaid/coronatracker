import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import {Provider} from 'react-redux'
import configureStore from "./redux/configureStore";
import 'bulma/css/bulma.min.css';
import './styles/index.scss';
import './styles/burgerMenu.scss';
import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'
import {HashRouter as Router} from 'react-router-dom';
import {VERSION} from "./constants";


if(localStorage.getItem('version') === undefined || localStorage.getItem('version') !== VERSION) {
    localStorage.clear();
    localStorage.setItem('version', VERSION);
}

const store = configureStore();
const persistor = persistStore(store);

// store.subscribe(() => {
//     console.log(store.getState());
// });

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <App/>
            </Router>
        </PersistGate>
    </Provider>,
    document.getElementById('app')
);