import convertNumber from './counter';
import async from "./async";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    convertNumber,
    users:async,
});

export default rootReducer;