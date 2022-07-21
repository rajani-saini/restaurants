import * as types from './constants';

export const initialState = {
  error: false,
  loading: false,
  selectedcity: false,
  listOfCities: false,
  restaurantdata: false,
  homefieldWarning: false,
  searchByOption: false,
  searchKeyword: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SELECTED_CITY:
      return {
        ...state,
        selectedcity: action.selectedcity,
      };
    case types.SELECT_CITY_FIELD_WARNING:
      return {
        ...state,
        homefieldWarning: action.homefieldWarning,
      };
    case types.LOAD_LIST_OF_CITIES:
      return {
        ...state,
        listOfCities: action.listOfCities,
      };
    case types.SET_RESTAURANTS:
      return {
        ...state,
        restaurantdata: false,
        searchByOption: action.searchByOption,
        searchKeyword: action.searchKeyword,
        error: false,
        loading: true,
      };
    case types.SET_RESTAURANTS_SUCCESS:
      return {
        ...state,
        restaurantdata: action.restaurantdata,
        error: false,
        loading: false,
      };
    case types.SET_RESTAURANTS_FAILURE:
      return {
        ...state,
        restaurantdata: false,
        error: true,
        loading: false,
      };
    case types.SET_SEARCH_BY_OPTION:
      return {
        ...state,
        searchByOption: action.searchByOption,
      };
    case types.SET_SEARCH_KEYWORD:
      return {
        ...state,
        searchKeyword: action.searchKeyword,
      };
    default:
      return state;
  }
};
