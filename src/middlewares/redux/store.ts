import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';
import thunkMiddleware from 'redux-thunk';
import { DEVELOPMENT } from '../misc/consts';
import { environment } from '../../environment';

let store: any = {};
const devtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ || null;
const composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (environment === DEVELOPMENT) {
  store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunkMiddleware),
      devtoolsExtension && devtoolsExtension()
    )
  );
} else {
  store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
  );
}

export default store;