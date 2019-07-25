import { combineReducers } from 'redux';
import users from './users';
import products from './products';
import count from './count';

export default combineReducers({
    count,
    users,
    products
});