import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  store.subscribe(() => {
    console.log('store subscribe=', store.getState());
  });

  return store;
};
