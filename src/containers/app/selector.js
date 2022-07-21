/* eslint-disable import/no-unresolved */
/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = (state) => state.global || initialState;
const selectRouter = (state) => state.router;

const makeSelectLocation = () =>
  createSelector(selectRouter, (routerState) => routerState.location);

const makeSelectData = () =>
  createSelector(selectGlobal, (globalState) => globalState);
const makeSelectSelectedCity = () =>
  createSelector(makeSelectData(), (state) => state.selectedcity);
const makeSelectListOfCities = () =>
  createSelector(makeSelectData(), (state) => state.listOfCities);
const makeSelectLoading = () =>
  createSelector(makeSelectData(), (state) => state.loading);
const makeSelectHomeFieldWarning = () =>
  createSelector(makeSelectData(), (state) => state.homefieldWarning);
const makeSelectOptions = () =>
  createSelector(makeSelectData(), (state) => state.searchByOption);
const makeSelectKeyword = () =>
  createSelector(makeSelectData(), (state) => state.searchKeyword);
const makeSelectRestaurantData = () =>
  createSelector(makeSelectData(), (state) => state.restaurantdata);
const makeSelectRestaurantDataError = () =>
  createSelector(makeSelectData(), (state) => state.error);
export {
  selectGlobal,
  makeSelectLocation,
  makeSelectSelectedCity,
  makeSelectListOfCities,
  makeSelectLoading,
  makeSelectHomeFieldWarning,
  makeSelectOptions,
  makeSelectKeyword,
  makeSelectRestaurantData,
  makeSelectRestaurantDataError,
};
