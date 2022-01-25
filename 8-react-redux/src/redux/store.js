import { createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterReducer';
import addCartReducer from './reducers/addCartReducer';
import dataImgReducer from './reducers/dataImgReducer';
import thunk from 'redux-thunk';

const rootReducers = combineReducers({
  counterReducer,
  addCartReducer,
  dataImgReducer
})

// exemple de middleware, traitement qui va primer avant mise à jour du store
// const customMiddleware = store => next => action => {

//   const actionModif = {
//     type: 'ADDCART',
//     payload: 750
//   }
//   next(actionModif)
// }

const store = createStore(
  rootReducers, applyMiddleware(thunk)
);


export default store