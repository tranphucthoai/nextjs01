import React from "react";
import styles from "../styles/Layout.module.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();
import rootSaga from "./sagas/rootSaga";
import myReducer from "./reducers";

var store = createStore(myReducer, applyMiddleware(sagaMiddleware));

function Layout({ children }) {
  return (
    <Provider store={store}>
      <main className={styles.container}>{children}</main>
    </Provider>
  );
}

export default Layout;
