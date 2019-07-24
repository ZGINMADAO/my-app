// function todoApp(state = initialState, action) {
//     switch (action.type) {
//         case ADD_TODO:
//         case TOGGLE_TODO:
//             return {
//                 ...state,
//                 todos: todos(state.todos, action)
//             }
//         default:
//             return state
//     }
// }


// function todoApp(state = initialState, action) {
//     return {
//         todos: todos(state.todos, action)
//     }
// }

// const todoApp = combineReducers({
//     todos // 等价于 todos: todos(state.todos, action)
// })