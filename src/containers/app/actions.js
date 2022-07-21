import * as types from './constants';

export const setResaurants = (searchByOption, searchKeyword) => ({
  type: types.SET_RESTAURANTS,
  searchByOption,
  searchKeyword,
});

export const setResaurantsSuccess = (restaurantdata) => ({
  type: types.SET_RESTAURANTS_SUCCESS,
  restaurantdata,
});

export const setResaurantsFailure = (error) => ({
  type: types.SET_RESTAURANTS_FAILURE,
  error,
});

export const selectCity = (selectedcity) => ({
  type: types.SELECTED_CITY,
  selectedcity,
});
export const selectCityWarning = (homefieldWarning) => ({
  type: types.SELECT_CITY_FIELD_WARNING,
  homefieldWarning,
});

export const loadListOfCities = (listOfCities) => ({
  type: types.LOAD_LIST_OF_CITIES,
  listOfCities,
});
export const setSearchByOption = (searchByOption) => ({
  type: types.SET_SEARCH_BY_OPTION,
  searchByOption,
});
export const setSearchKeyword = (searchKeyword) => ({
  type: types.SET_SEARCH_KEYWORD,
  searchKeyword,
});
