// function todos(state = [], action) {
//     switch (action.type) {
//         case ADD_TODO:
//             return [
//                 ...state,
//                 {
//                     text: action.text,
//                     completed: false
//                 }
//             ]
//         case TOGGLE_TODO:
//             return state.map((todo, index) => {
//                 if (index === action.index) {
//                     return {
//                         ...todo,
//                         completed: !todo.completed
//                     } // 时刻谨记不要修改 state，保证 reducer 是纯函数
//                 }
//                 return todo
//             })
//         default:
//             return state
//     }
// }