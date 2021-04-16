import React from 'react';
import { isAuthenticated } from './auth';

import {BrowserRouter, Route, Switch, Redirect  } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route 
        {...rest}
        render = {props => 
            isAuthenticated() ? (
                <Component { ...props } />
            ) : (
                <Redirect to = { { pathname: "/", state: { from: props.location } } } />
            )
        }
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            {/* Definindo a Home do projeto*/}
            <Route exact path="/" component={() => <h1>Hello word</h1>} ></Route>
            <PrivateRoute path = "/app" component = {  () => <h1>Voce Esta Logado</h1> } />
        </Switch>
    </BrowserRouter>
); 

export default Routes;