import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { reducers } from './reducers';
import { MuiThemeProvider } from '@material-ui/core/styles';
import App from './components/App';
import About from './components/Aboutus';
import Contactus from './components/Contactus';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
//import { Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const history = createBrowserHistory();

let store = createStore(reducers(history),{} ,compose(applyMiddleware(thunk, logger, routerMiddleware(history))));
ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={App}/>
                        <Route path="/about" component={About}/>
                        <Route path="/contactus" component={Contactus}/>
                    </Switch>
                </Router>
            </ConnectedRouter>
        </Provider>
    </MuiThemeProvider>,
  document.getElementById('app')
);
