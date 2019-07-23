import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import PrimaryLayout from './PrimaryLayout'
import AdminLayout from './pages/admin'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Login from './pages/Login'
import Demo from './Demo'

// import api from './pages/api'

// global.Api = api;


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact render={() => <Redirect to={`/login`} push/>}/>
            {/*<Route path="/demo" component={Demo}/>*/}
            <Route path="/admin" component={AdminLayout}/>
            {/*<Route path="/admin" exact component={AdminLayout}>*/}
            {/*    <Switch>*/}
            {/*        <Route path="/admin/demo" component={Demo}/>*/}
            {/*    </Switch>*/}
            {/*</Route>*/}


            {/*<Route path="/admin" exact render={ props => LayoutRouter }>*/}
            {/*    <Switch>*/}
            {/*        <Route path="/admin/demo" component={Demo}/>*/}
            {/*    </Switch>*/}
            {/*</Route>*/}
            <Route path="/login" component={Login}/>
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
