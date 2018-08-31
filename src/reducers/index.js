import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import photos from './photos';
import likes from './likes';

const rootReducer = combineReducers({photos, likes, routing: routerReducer });

export default rootReducer;
