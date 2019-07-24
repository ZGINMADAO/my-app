import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import PrimaryLayout from './PrimaryLayout'
import AdminLayout from './layouts/AdminLayout'
import PrivateRoute from './components/PrivateRoute'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import { Provider } from 'mobx-react'
import stores from './pages/stores/Index'
import { Provider as ReduxProvider } from 'react-redux'
import reduxStore from './redux-simple' // redux简单例子
// import reducer from './redux-stores/reducer'


ReactDOM.render(
    <BrowserRouter>
        <Provider {...stores}>
            <ReduxProvider store={reduxStore}>
            <Switch>
                <Route path="/" exact render={() => <Redirect to={`/login`} push />} />
                {/*<Route path="/admin" component={AdminLayout}/>*/}
                <Route path="/login" component={Login} />
                {/*<PrivateRoute path="/admin" component={AdminLayout}/>*/}
                <PrivateRoute path="/" component={AdminLayout} />
                <Route component={NotFound} />
            </Switch>
            </ReduxProvider>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
