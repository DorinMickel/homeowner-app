import { compose, createStore } from "redux";
import rootReducer from "../reducers/rootReducer";


const enhancer = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__()
    );

const persistedState = localStorage.getItem('reduxState') ?
    JSON.parse(localStorage.getItem('reduxState')) :
    {}

const store = createStore(rootReducer, persistedState, enhancer)

store.subscribe(() => {
    localStorage.setItem('reduxState', 
    JSON.stringify(store.getState()))
})

export default store