export default function counte(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        case 'INCREMENT_ASYNC':
            return state
        default:
            return state
    }
}
