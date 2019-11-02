import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { reducers } from './reducers';
import { MuiThemeProvider } from '@material-ui/core/styles';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';


import Router from './routes';

const history = createBrowserHistory();

let store = createStore(reducers(history),{} ,compose(applyMiddleware(thunk, logger, routerMiddleware(history)), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <Router history={history} />
        </Provider>
    </MuiThemeProvider>,
  document.getElementById('app')
);
