import { configureStore } from "@reduxjs/toolkit";
import { counterReducer, initialize } from "./counter/slice";
import createSagaMiddleware from "@redux-saga/core";
import { all } from "redux-saga/effects";
import counterSaga from "./counter/saga";
import { createWrapper } from "next-redux-wrapper";

export function* rootSaga() {
  yield all([counterSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { counter: counterReducer },
  middleware: [sagaMiddleware],
});

const makeStore = () => {
  const configuredStore = configureStore({
    reducer: { counter: counterReducer },
    middleware: [sagaMiddleware],
    devTools: true,
  });
  sagaMiddleware.run(rootSaga);
  return configuredStore;
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;

export const wrapper = createWrapper<AppStore>(makeStore);
