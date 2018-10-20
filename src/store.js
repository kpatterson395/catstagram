import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer, autoRehydrate } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import { reactReduxFirebase } from 'react-redux-firebase';
import fbConfig from './firebase/firebase'; 
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet
}


const pReducer = persistReducer(persistConfig, rootReducer);




export const store = createStore(pReducer, composeWithDevTools (

		applyMiddleware(thunk),
		reactReduxFirebase(fbConfig)
	));


export const persistor = persistStore(store);

