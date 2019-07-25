import { SERVICES } from "../actions/servicesAction";
const initialState = {
    isSale: false,
    name: "测试商品",
    price: 9.9,
    statue: null
};

export default (state = initialState, action) => {

    switch (action.type) {
        case 'product-get':
            return {
                ...state
            }
        case 'product-save':
            return {
                ...state,
                name: '新商品'
            }
        case 'product-delete':
            return {
                ...state,
                statue: null
            }
        default:
            return state
    }
}
