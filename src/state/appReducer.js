import { combineReducers } from 'redux';

import todoReducer from './reducer';

const appReducer = combineReducers({
    todos: todoReducer
})

export default appReducer;