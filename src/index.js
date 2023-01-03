import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import WebFont from 'webfontloader';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';
import './assets/css/App.css';
import './assets/css/lineicons.css';
import './assets/css/shapes.css';
import App from './content/App'

import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware, combineReducers, compose } from 'redux';
//import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { baseReducer } from './reducer/reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//const logger = createLogger();
const rootReducer = combineReducers({ baseReducer });
const store = createStore(
   rootReducer, 
   composeEnhancer(
      applyMiddleware(
      thunkMiddleware/*, logger*/
      ),
   ),
);

const Load = () => {
    useEffect(() => {
        WebFont.load({
            custom: {
                families: ['LineIcons'],
                urls: ['/assets/css/lineicons.css']
            },
            google: {
                families: ['Inter:300,400,500,600,700,800,900','Montserrat:300,400,600,700,800,900','Poppins:100,200,300,400,500,600,700']
            }
        });
    }, []);
    return (
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Load/>
);

reportWebVitals();
