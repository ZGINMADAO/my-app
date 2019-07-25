import React from 'react';
import ReactDOM from 'react-dom';
import './mocks/index'
import './index.css';
// import PrimaryLayout from './PrimaryLayout'
import AdminLayout from './layouts/AdminLayout'
import PrivateRoute from './components/PrivateRoute'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import {Provider} from 'mobx-react'
import stores from './pages/stores/Index'
import {Provider as ReduxProvider} from 'react-redux'
// import reduxStore from './redux-simple' // redux简单例子
import reducers from './redux-stores/reducers/index'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas/saga'
import promiseMiddleware from 'redux-promise';

import * as T from 'immutable';  //为什么immutable 没写入package.json 好奇怪

console.log('begin');
const obj = T.fromJS({a: 1, b: 2}, function (key, value, path) {
    console.log(key, value, path)
    return T.isIndexed(value) ? value.toList() : value.toOrderedMap()
});

console.log(obj);
console.log('end');

// const sagaMiddleware = createSagaMiddleware()
// const reduxStores = createStore(reducers, applyMiddleware(thunk, sagaMiddleware,promiseMiddleware))
const reduxStores = createStore(reducers, applyMiddleware(promiseMiddleware))

// sagaMiddleware.run(sagas)


ReactDOM.render(
    <BrowserRouter>
        <Provider {...stores}>
            <ReduxProvider store={reduxStores}>
                <Switch>
                    <Route path="/" exact render={() => <Redirect to={`/login`} push/>}/>
                    {/*<Route path="/admin" component={AdminLayout}/>*/}
                    <Route path="/login" component={Login}/>
                    {/*<PrivateRoute path="/admin" component={AdminLayout}/>*/}
                    <PrivateRoute path="/" component={AdminLayout}/>
                    <Route component={NotFound}/>
                </Switch>
            </ReduxProvider>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
