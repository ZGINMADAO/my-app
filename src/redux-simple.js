
import { createStore } from 'redux'


let initState = {
    todos: [
        {
            text: 'Consider using Redux',
            completed: true,
        },
        {
            text: 'Keep all state in a single tree',
            completed: false
        }
    ]
};

const todos = function (state = [], action) {
    switch (action.type) {
        case 'INCREASE': return { count: state.count + 1 };
        case 'DECREASE': return { count: state.count - 1 };
        default: return state;
    }
}

const reducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREASE': return { count: state.count + 1 };
        case 'DECREASE': return { count: state.count - 1 };
        default: return state;
    }
    // return {
    //     todos: otherReducer
    // }
}

const actions = {
    increase: () => ({ type: 'INCREASE' }),
    decrease: () => ({ type: 'DECREASE' })
}
const reduxStores = createStore(reducer)

export default reduxStores

// reduxStores.subscribe(() =>
//     console.log(reduxStores.getState())
// );

// reduxStores.dispatch(actions.increase()) // {count: 1}
// reduxStores.dispatch(actions.increase()) // {count: 2}
// reduxStores.dispatch(actions.increase()) // {count: 3}