import React from 'react';
import Home from './../components/Home';
import About from './../components/Aboutus';
import Contactus from './../components/Contactus';
import Login from './../components/Login';
import TodoApp from './../components/TodoApp';

import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const AppRouter = (props) => <ConnectedRouter history={props.history}>
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contactus" component={Contactus}/>
            <Route exact path="/login" component={Login}/>
            <Route path="/todoApp" component={TodoApp} />
        </Switch>
    </Router>
</ConnectedRouter>

export default AppRouter;