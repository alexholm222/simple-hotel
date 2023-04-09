import { configureStore } from '@reduxjs/toolkit';
import { reducerLogin } from './loginReducer';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from '../saga/saga';
import { cardReduser } from './cardReducer';
import { searchReduser } from './searchReducer';
import { favoritesReduser } from './favoritesReducer';
import { preloaderReducer } from './preloaderReducer';
import { reducerSort } from './sortStateReducer';
import { sliderReduser } from './sliderReducer';

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore ({
  reducer: {
    reducerLogin,
    cardReduser,
    searchReduser,
    favoritesReduser,
    preloaderReducer,
    reducerSort,
    sliderReduser,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});



sagaMiddleware.run(rootWatcher);