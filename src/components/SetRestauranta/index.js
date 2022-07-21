/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Donuts from './images/banner.png';

const StyledDiv = styled.section`
  text-align: center;
  background-color: #eaeaec;
  .restaurant-image {
    width: 100%;
  }
  h4,
  p {
    padding: 0px 15px;
    text-align: left;
  }
  .blurb {
    color: #f0857b;
  }
  .price {
    i {
      color: #f0857b;
    }
  }
  .refine-container {
    background-color: #efadae;
    margin-top: -5px;
    padding: 15px 0px;
  }
  .refine-text {
    margin: 0px;
    color: #fff;
    font-size: 1.4rem;
    font-weight: 700;
    padding: 0px;
    display: flex;
    align-items: center;
  }
  .refine-header {
    margin-bottom: 15px;
    margin-top: 0px;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
  }
  select {
    border: none;
    margin: 0px 15px;
    padding: 7px;
    font-size: 1rem;
    font-weight: 700;
    height: 35px;
  }
  .refine-items {
    display: flex;
    justify-content: center;
    flex-basis: 20%;
    box-sizing: border-box;
  }
  @media (max-width: 1333px) {
    .refine-items {
      display: block;
    }
  }

  @media (max-width: 555px) {
    .refine-button {
      width: 80%;
    }
  }
  @media (max-width: 1333px) {
    .refine-button {
      margin: 0px auto;
      margin-top: 15px;
      padding: 10px !important;
      width: 30%;
      text-align: center;
      display: block;
    }
    .refine-text {
      display: block;
      text-align: center;
      margin: 7px;
    }
  }
  input {
    border: none;
    font-size: 1rem;
    font-weight: 700;
  }
  .refine-keyname {
    padding: 0px 7px;
    margin: 0px 15px;
    height: 35px;
  }
  .refine-button {
    border: none;
    color: #000;
    border-radius: 15px;
    background-color: #fff;
    font-size: 1rem;
    font-weight: 700;
    padding: 0px 15px;
    border: 1px solid white;
    cursor: pointer;
    &:hover {
      border: 1px solid black;
    }
  }
  .warning {
    color: red;
    background-color: white;
    box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.16);
    margin-top: 30px;
    padding: 10px;
    font-size: 1.2rem;
  }
`;
const Grid = ({ data }) => {
  let uielems = '';
  if (data) {
    uielems = data.map((item) => {
      const dollarArray = Array.from({ length: item.price }, (_, x) => x + 1);
      return (
        <div className="grid-item" key={item.id}>
          <div className="grid-item-wrapper">
            <div className="grid-item-container">
              <img
                src={item.image_url}
                alt="Restaurant"
                className="restaurant-image"
              />
              <h4>{item.name}</h4>
              <h4 className="price">
                Price:{' '}
                {dollarArray.map((dollar) => (
                  <i
                    key={`dollar${dollar}`}
                    className="fa fa-usd"
                    aria-hidden="true"
                  ></i>
                ))}
              </h4>
              <h4 className="blurb">{`${item.address}, ${item.city}, ${item.state} ${item.postal_code}`}</h4>
            </div>
          </div>
        </div>
      );
    });
  }
  return uielems;
};
const Refine = ({
  listOfCities,
  selectedcity,
  selectCity,
  buttonAction,
  setSearchByOption,
  setSearchKeyword,
}) => {
  let uielems = '';
  uielems = (
    <div className="refine-items">
      <p className="refine-text">City:</p>
      <select name="select" onChange={(e) => selectCity(e.target.value)}>
        <option value={selectedcity}>{selectedcity}</option>
        {listOfCities &&
          listOfCities.map((item) => (
            <option key={`${item}`} value={item}>
              {item}
            </option>
          ))}
      </select>
      <p className="refine-text">Search by:</p>
      <select name="select" id="select" onChange={(e) => setSearchByOption(e.target.value)}>
        <option value={false}>Select</option>
        <option value="name">Name</option>
        <option value="address">Address</option>
        <option value="area">Area</option>
      </select>
      <input
        type="text"
        className="refine-keyname"
        placeholder="Keyword"
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <button
        type="submit"
        className="refine-button"
        onClick={(e) => buttonAction()}
      >
        Submit
      </button>
    </div>
  );
  return uielems;
};
const SetRestaurants = (props) => {
  const {
    restaurants,
    selectedcity,
    listOfCities,
    selectCity,
    buttonAction,
    setSearchByOption,
    setSearchKeyword,
    message,
  } = props;
  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        buttonAction();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
    
  }, [buttonAction]);
  return (
    <StyledDiv>
      <img src={Donuts} width="100%" alt="Banner" />
      <div className="refine-container">
        <p className="refine-header">REFINE YOUR SEARCH</p>
        <Refine
          listOfCities={listOfCities}
          selectedcity={selectedcity}
          selectCity={selectCity}
          buttonAction={buttonAction}
          setSearchByOption={setSearchByOption}
          setSearchKeyword={setSearchKeyword}
        />
      </div>
      <div className="container">
        {message !== '' && <h1 className="warning">{message}</h1>}
        <Grid data={restaurants} />
      </div>
    </StyledDiv>
  );
};

SetRestaurants.propTypes = {
  restaurants: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.array,
    PropTypes.object,
  ]),
  listOfCities: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.array,
    PropTypes.object,
  ]),
  message: PropTypes.string,
  buttonAction: PropTypes.func,
  selectCity: PropTypes.func,
  setSearchByOption: PropTypes.func,
  setSearchKeyword: PropTypes.func,
  selectedcity: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};
export default SetRestaurants;
