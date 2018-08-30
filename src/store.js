import { createStore } from 'redux';


const defaultState = {

			photos: []
}

const reducer = (state = defaultState, action) => {

	return state;
};


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store
