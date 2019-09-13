import { combineReducers, createStore } from 'redux';

import { users, posts } from './reducers';

export const reducers = combineReducers({
  users,
  posts
});

export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
}

export const store = configureStore();
