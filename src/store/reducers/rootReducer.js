import showsReducer from './showsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    shows: showsReducer
});

export default rootReducer;
