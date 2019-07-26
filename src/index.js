import React from 'react';
import ReactDOM from 'react-dom';
import './mocks/index'
import './index.css';
// import PrimaryLayout from './PrimaryLayout'
import AdminLayout from './layouts/AdminLayout'
import PrivateRoute from './components/PrivateRoute'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import { observer, Provider } from 'mobx-react'
import stores from './pages/stores/Index'
import { Provider as ReduxProvider } from 'react-redux'
// import reduxStore from './redux-simple' // redux简单例子
import reducers from './redux-stores/reducers/index'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas/saga'
import promiseMiddleware from 'redux-promise';
import { LocaleProvider } from 'antd';

import antdZhCN from 'antd/lib/locale-provider/zh_CN'
import antdEnUS from 'antd/lib/locale-provider/en_US'

import intl from 'react-intl-universal';
import zh from './i18n/zh'
import en from './i18n/en'

import { addLocaleData, IntlProvider } from 'react-intl';
import intlEn from 'react-intl/locale-data/en';
import intlZh from 'react-intl/locale-data/zh';

import izh from './i18n/intlZh'
import ien from './i18n/intlEn'


let lang = (navigator.languages && navigator.languages[0]) || navigator.language

// intl.init({
//     currentLocale: lang.split('-')[0],
//     locales: {
//         zh,
//         en
//     }
// })

addLocaleData([...intlZh, ...intlEn]);

let messages = {}
messages['en'] = ien;
messages['zh'] = izh;

// const sagaMiddleware = createSagaMiddleware()
// const reduxStores = createStore(reducers, applyMiddleware(thunk, sagaMiddleware,promiseMiddleware))
const reduxStores = createStore(reducers, applyMiddleware(promiseMiddleware))

// sagaMiddleware.run(sagas)

ReactDOM.render(
    // <LocaleProvider locale={antdZhCN}>
        <IntlProvider  locale={"zh"} messages={izh}>
            <BrowserRouter>
                <Provider {...stores}>
                    <ReduxProvider store={reduxStores}>
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
        </IntlProvider>
    // </LocaleProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
