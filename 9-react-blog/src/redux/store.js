import { createStore,applyMiddleware,combineReducers } from '@reduxjs/toolkit';
import articleReducer from './articles/articleReducer'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    articleReducer,
})

export const store = createStore(rootReducer,applyMiddleware(thunk));

