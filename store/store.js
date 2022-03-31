import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddle from "redux-saga";
import rootReducer from "./reducer.js";
import rootSaga from "./rootSaga.js";

const sagaMiddle = createSagaMiddle();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddle))
);

sagaMiddle.run(rootSaga);

export default store;
