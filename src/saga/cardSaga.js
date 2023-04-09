import { put, takeEvery, call, select } from 'redux-saga/effects';
import { getCardsHotel } from '../utils/Api';
import { setCards, FETCH_CARDS } from '../store/cardReducer';
import { setPreload } from '../store/preloaderReducer';

function* apiCardsWorker() {
  yield put(setPreload(true));
  const queryHotel = yield select(({ searchReduser }) => searchReduser.searchData);
  const data = yield call(getCardsHotel, queryHotel.city, queryHotel.checkIn, queryHotel.checkOut);
  yield put(setCards(data));
  yield put(setPreload(false));
}

export function* cardWatcher() {
  yield takeEvery(FETCH_CARDS, apiCardsWorker);
}