const initialState = {
    username: "ggc",
    isLogin: true,
    status: null
};

export default (state = initialState, action) => {

    switch (action.type) {
        case 'user-get':
            return {
                ...state
            }
        case 'user-save':
            return {
                ...state,
                status: "save"
            }
        case 'user-delete':
            return {
                ...state,
                status: "delete"
            }
        case 'user-init':
            return {};
        default:
            return state
    }
}
