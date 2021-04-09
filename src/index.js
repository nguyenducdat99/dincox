import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, compose, createStore } from 'redux';
import {Provider} from 'react-redux';
import Reducers from './reducers/Reducers';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react'
import AppContainer from './containers/AppContainer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        'ListProduct',
        'listSize',
        'listSizeDetail',
        'listArticle',
        'loginedAccount',
        'listImages'
    ]
}
const persistedReducer = persistReducer(persistConfig, Reducers);

const store = createStore(
        persistedReducer,
        compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    ); // define store
    
let persistor = persistStore(store)


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppContainer />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
