/* eslint-disable no-return-await */
/* eslint-disable require-yield */
import { put, call, takeLatest, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  loadListOfCities,
  setResaurantsSuccess,
  setResaurantsFailure,
  selectCityWarning,
} from '../containers/app/actions';
import { SET_RESTAURANTS } from '../containers/app/constants';
import {
  makeSelectSelectedCity,
  makeSelectLocation,
} from '../containers/app/selector';

const fetchAsyncA = async (url) => await (await fetch(url)).json();

function* getListsOfCities() {
  const someData = yield fetchAsyncA(
    'https://opentable.herokuapp.com/api/cities',
  );
  yield put(loadListOfCities(someData));
}
function* getListsOfRestaurants({ searchByOption, searchKeyword }) {
  const selectedCity = yield select(makeSelectSelectedCity());
  const currentPath = yield select(makeSelectLocation());
  if (selectedCity) {
    if (currentPath.pathname !== '/restaurants') {
      yield put(push('/restaurants'));
    }
    const someData = yield fetchAsyncA(
      `https://opentable.herokuapp.com/api/restaurants?city=${selectedCity}&${searchByOption}=${searchKeyword}`,
    );
    yield put(setResaurantsSuccess(someData));
  } else if (selectedCity === false) {
    yield put(selectCityWarning(true));
    yield put(setResaurantsFailure());
  } else {
    yield put(setResaurantsFailure());
  }
}

export default function* rootSaga() {
  yield call(getListsOfCities);
  yield takeLatest([SET_RESTAURANTS], getListsOfRestaurants);
}
