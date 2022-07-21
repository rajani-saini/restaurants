import {
  SET_RESTAURANTS,
  SET_RESTAURANTS_SUCCESS,
  SET_RESTAURANTS_FAILURE,
} from '../constants';

import {
  setResaurants,
  setResaurantsSuccess,
  setResaurantsFailure,
} from '../actions';

describe('App Actions', () => {
  describe('setResaurants', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: SET_RESTAURANTS,
      };

      expect(setResaurants()).toEqual(expectedResult);
    });
  });

  describe('setResaurantsSuccess', () => {
    it('should return the correct type and the passed repos', () => {
      const restaurantdata = false;
      const expectedResult = {
        type: SET_RESTAURANTS_SUCCESS,
        restaurantdata,
      };

      expect(setResaurantsSuccess(restaurantdata)).toEqual(expectedResult);
    });
  });

  describe('setResaurantsFailure', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: SET_RESTAURANTS_FAILURE,
        error: fixture,
      };

      expect(setResaurantsFailure(fixture)).toEqual(expectedResult);
    });
  });
});
