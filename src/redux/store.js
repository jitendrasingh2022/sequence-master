import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducer/index";
import rootSaga from "./saga/index";

const sagaMiddleware = createSagaMiddleware();

let store = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore(preloadedState) {
  return createStore(
    reducers,
    preloadedState,
    composeEnhancer(applyMiddleware(sagaMiddleware))
  );
  // const enhancers = [preloadedState, applyMiddleware(sagaMiddleware)];
  // return createStore(reducers, compose(...enhancers));
  // return createStore(reducers, preloadedState, applyMiddleware(sagaMiddleware));
}

store = configureStore({});

sagaMiddleware.run(rootSaga);
export default store;
