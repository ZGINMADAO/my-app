
import { createStore } from 'redux'

const reducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREASE': return { count: state.count + 1 };
        case 'DECREASE': return { count: state.count - 1 };
        default: return state;
    }
}

const actions = {
    increase: () => ({ type: 'INCREASE' }),
    decrease: () => ({ type: 'DECREASE' })
}
const reduxStores = createStore(reducer)

reduxStores.subscribe(() =>
    console.log(reduxStores.getState())
);

reduxStores.dispatch(actions.increase()) // {count: 1}
reduxStores.dispatch(actions.increase()) // {count: 2}
reduxStores.dispatch(actions.increase()) // {count: 3}