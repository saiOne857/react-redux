import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { reducers } from './reducers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { BrowserRouter as Router, Route, Switch, BrowserHistory as history } from 'react-router-dom'

let store = createStore(reducers, applyMiddleware(thunk, logger));
ReactDOM.render(
 <Provider store={store}>
    <MuiThemeProvider>
        <Router history={history}>
            <Switch>
                <Route exact path="/home" Component={App}/>
            </Switch>
        </Router>
    </MuiThemeProvider>
   </Provider>,
  document.getElementById('app')
);
