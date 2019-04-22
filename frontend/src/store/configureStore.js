import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import authReducer from '../reducers/auth';

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer
    })
  );
  store.subscribe(() => {
    console.log(store.getState().auth);
  })
  return store;
}