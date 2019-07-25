import { handleActions } from 'redux-actions'
const initialState = {
    isSale: false,
    name: "测试商品",
    price: 9.9,
    statue: null
};

export default handleActions({
    ADD_NUM(state, action) {
        console.log(action);
        return { ...state, name: 5555 };
    },
}, initialState);

