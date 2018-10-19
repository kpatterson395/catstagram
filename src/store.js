import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { reactReduxFirebase } from 'react-redux-firebase';
import fbConfig from './firebase/firebase'; 
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2
}




export const store = createStore(rootReducer, composeWithDevTools (

		applyMiddleware(thunk),
		reactReduxFirebase(fbConfig)
	));
