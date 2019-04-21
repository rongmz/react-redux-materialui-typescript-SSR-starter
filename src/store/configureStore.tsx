import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = (preloadedState: any) => {
  const store = createStore(
    rootReducer,
    preloadedState,
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

export default configureStore;