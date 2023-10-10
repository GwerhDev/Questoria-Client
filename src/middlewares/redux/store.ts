import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';
import thunkMiddleware from 'redux-thunk';
import { DEVELOPMENT } from '../misc/consts';
import { environment } from '../../environment';

let store: any = {};
const composeEnhancer = compose;

if (environment === DEVELOPMENT) {
  console.log(environment)
  store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunkMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  console.log(environment)
  store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
  );
}

export default store;