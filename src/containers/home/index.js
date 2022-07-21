import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import SetCity from '../../components/SetCity';
import Spinner from '../../components/Spinner';
import { selectCity, setResaurants } from '../app/actions';
import {
  makeSelectListOfCities,
  makeSelectLoading,
  makeSelectHomeFieldWarning,
  makeSelectSelectedCity,
} from '../app/selector';

const stateSelector = createStructuredSelector({
  listOfCities: makeSelectListOfCities(),
  loading: makeSelectLoading(),
  homeFieldWarning: makeSelectHomeFieldWarning(),
  selectedcity: makeSelectSelectedCity(),
});

const Home = () => {
  const { listOfCities, loading, homeFieldWarning, selectedcity } = useSelector(
    stateSelector,
  );
  const dispatch = useDispatch();
  return (
    <article>
      {loading ? (
        <Spinner />
      ) : (
        <SetCity
          listOfCities={listOfCities}
          selectCity={(v) => dispatch(selectCity(v))}
          buttonAction={() => dispatch(setResaurants(false, false))}
          homeFieldWarning={homeFieldWarning}
          selectedcity={selectedcity}
        />
      )}
    </article>
  );
};

export default Home;
