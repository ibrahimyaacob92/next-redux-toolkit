import { call, put, takeLatest } from "redux-saga/effects";
import {
  getRandomValue,
  getRandomValueError,
  getRandomValueSuccess,
} from "./slice";

export default function* counterSaga() {
  yield takeLatest(getRandomValue, getRandomValueSaga);
}

function* getRandomValueSaga() {
  try {
    const randomValue: number = yield call(generateRandomValue);
    yield put(getRandomValueSuccess(randomValue));
  } catch (e: any) {
    yield put(getRandomValueError(e.message));
  }
}

const generateRandomValue = () => {
  const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  const oneToTen = Math.floor(Math.random() * 11);

  return plusOrMinus * oneToTen;
};
