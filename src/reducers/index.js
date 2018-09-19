import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import photos from './photos';
import comments from './comments'

const rootReducer = combineReducers({photos, comments, routing: routerReducer });

export default rootReducer;
