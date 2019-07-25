import {handleActions} from 'redux-actions'

export default handleActions({
    ["list"]:
        {
            next(state, action) {
                return {
                    ...state,
                    bookList: action.payload,
                };
            },
            throw(state) {
                return state;
            },
        },
})
