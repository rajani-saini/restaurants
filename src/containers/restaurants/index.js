import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCity,
  setResaurants,
  setSearchByOption,
  setSearchKeyword,
} from '../app/actions';
import SetRestaurants from '../../components/SetRestauranta';
import {
  makeSelectListOfCities,
  makeSelectLoading,
  makeSelectHomeFieldWarning,
  makeSelectSelectedCity,
  makeSelectOptions,
  makeSelectKeyword,
  makeSelectRestaurantData,
  makeSelectRestaurantDataError,
} from '../app/selector';
const stateSelector = createStructuredSelector({
  listOfCities: makeSelectListOfCities(),
  loading: makeSelectLoading(),
  homeFieldWarning: makeSelectHomeFieldWarning(),
  selectedcity: makeSelectSelectedCity(),
  option: makeSelectOptions(),
  keyword: makeSelectKeyword(),
  data: makeSelectRestaurantData(),
  error: makeSelectRestaurantDataError(),
});
const Restaurants = () => {
  const {
    listOfCities,
    selectedcity,
    data,
    option,
    keyword,
    loading,
    error,
    homeFieldWarning,
  } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const [displayMsg, setdisplayMsg] = useState('');
  useEffect(() => {
    if (loading) {
      setdisplayMsg('Loading Results');
    } else if (!data && !homeFieldWarning) {
      setdisplayMsg('Browse Restaurants in your City using the Filters above');
    } else if (homeFieldWarning && data === false) {
      setdisplayMsg('Please Select City');
    } else {
        if (data.restaurants.length === 0) {
          setdisplayMsg('No Results');
        }
      setdisplayMsg('');
    }
  }, [loading, data, homeFieldWarning]);
  return (
    <article className="animated animatedFadeInUp fadeInUp">
      <SetRestaurants
        restaurants={data.restaurants}
        selectedcity={selectedcity}
        listOfCities={listOfCities.cities}
        selectCity={(v) => dispatch(selectCity(v))}
        buttonAction={() => dispatch(setResaurants(option, keyword))}
        setSearchByOption={(v) => dispatch(setSearchByOption(v))}
        setSearchKeyword={(v) => dispatch(setSearchKeyword(v))}
        message={displayMsg}
        error={error}
      />
    </article>
  );
};

export default Restaurants;
