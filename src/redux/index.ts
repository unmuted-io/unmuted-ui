import { createStore, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk";
import rootReducer from './reducers/rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/'

const sagaMiddleware = createSagaMiddleware()

const middleware = [
  thunk,
  sagaMiddleware
]
const enhancers = [applyMiddleware(...middleware)]

/* tslint:disable */
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(...enhancers),
)

sagaMiddleware.run(rootSaga)

export default store;