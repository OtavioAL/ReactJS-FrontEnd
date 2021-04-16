import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';

export const history = createBrowserHistory();

export const store = createStore(
  createRootReducer(history), {},
  compose(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
    ),
  ),
);
