import { combineReducers } from 'redux';
import users from './users';
import products from './products';
import count from './count';
import antdLang from './antdLang';

export default combineReducers({
    count,
    users,
    products,
    antdLang,
});