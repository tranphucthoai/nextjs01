import { categoriesApi } from "./../pages/api";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAILURE,
  GET_ALL_CATEGORIES,
} from "../constans";

function* getAllCatagories() {
  try {
    let result;
    yield call(async () => {
      result = await categoriesApi.getAll();
    });
    if (result && result.length > 0) {
      yield put({ type: GET_ALL_CATEGORIES_SUCCESS, payload: result });
    } else {
      yield put({ type: GET_ALL_CATEGORIES_FAILURE });
    }
  } catch (error) {
    yield put({ type: GET_ALL_CATEGORIES_FAILURE, payload: error });
  }
}

function* Saga() {
  yield takeLatest(GET_ALL_CATEGORIES, getAllCatagories);
}

export default Saga;
