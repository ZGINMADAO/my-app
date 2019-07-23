import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import PrimaryLayout from './PrimaryLayout'
import AdminLayout from './layouts/AdminLayout'
import PrivateRoute from './components/PrivateRoute'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Login from './pages/Login'
import NotFound from './pages/NotFound'


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact render={() => <Redirect to={`/login`} push/>}/>
            {/*<Route path="/admin" component={AdminLayout}/>*/}
            <Route path="/login" component={Login}/>
            {/*<PrivateRoute path="/admin" component={AdminLayout}/>*/}
            <PrivateRoute path="/" component={AdminLayout}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
async function testAsync() {
    return "hello async";
}

const data = testAsync();
console.log(data);
serviceWorker.unregister();
