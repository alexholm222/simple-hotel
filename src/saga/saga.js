import { all } from "redux-saga/effects";
import { cardWatcher } from './cardSaga'

export function* rootWatcher() {
  yield all([cardWatcher()])
}