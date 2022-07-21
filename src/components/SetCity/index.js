import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Emoji from './images/plate.png';
import Donuts from './images/donutss.png';

const StyledDiv = styled.section`
  text-align: center;
  .blurb {
    color: #000;
    font-size: 1.2rem;
    font-weight: 700;
  }
  .header {
    color: #000;
    font-size: 3rem;
    font-weight: 900;
    margin: 0px;
  }
  .emoji {
    height: 100px;
    text-align: center;
    margin: 0 auto;
  }
  .outer {
    background-color: #eaeaec;
    display: table;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: url(${Donuts}) no-repeat;
    background-size: cover;
  }

  .middle {
    display: table-cell;
    vertical-align: middle;
    background-color: transparent;
  }

  .inner {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    padding: 25px;
  }
  @media only screen and (max-device-width: 480px) {
    .inner {
      width: auto;
    }
  }
  .whiteButton {
    margin-top: 25px;
    background-color: #fff;
    opacity: 1;
    font-size: 1.2rem;
    font-weight: 700;
    color: #000;
    border-radius: 0px;
    border: 2px solid #fff;
    padding: 10px 25px;
    box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.16);
    width: 100%;
    cursor: pointer;
    &:hover {
      background-color: #efadae;
      border: 2px solid #000;
    }
  }

  .whiteBackground {
    padding: 25px;
    z-index: 9999;
    display: block;
    background-color: #efadae;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0;
  }

  label[for='favcity'] {
    position: relative;
    display: block;
    overflow: hidden;
    cursor: pointer;
  }

  label[for='favcity']::after {
    content: ' ';
    position: absolute;
    right: 0;
    top: 0;
    width: 40px;
    height: 38px;
    display: block;
    border: 2px solid black;
    background: #efadae
      url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOBAMAAAGq7RFVAAAAJ1BMVEX///////////////////////////////////////////////////9Ruv0SAAAADHRSTlMACAoREoKDt7y9zc5qtZoyAAAAcklEQVQIHQXBsQnCUAAFwFOCCKbIABaWERzi1yaFAzmEpHYEC8GUKVQEkbyhvOOkZqdWt0/QYKqLzQeF7dv6y/RLwa2wYtk4Xxxe+t8yd1WuM/rcUc2gYHEeoP02umSgTR50ybBPRuiSZAS6ZAQ4jgCAPyjYJiRH4fymAAAAAElFTkSuQmCC')
      no-repeat center center;
    pointer-events: none;
  }

  label[for='favcity'] select {
    border: 5px solid #eeeeee;
    background: white;
    color: black;
    padding: 7px 20px 7px 20px;
    width: 100%;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
  }

  label[for='favcity'] select::-ms-expand {
    display: none;
  }

  label[for='favcity'] :-moz-any(select) {
    width: 110%;
  }

  label[for='favcity'].ie9 select {
    width: 110%;
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
const getallOptions = (data) => {
  let uielem = '';
  if (data) {
    uielem = data.map((item) => (
      <option value={item} key={`cityname${item}`}>
        {item}
      </option>
    ));
    return uielem;
  }
  return uielem;
};
const SetCity = (props) => {
  const {
    listOfCities,
    buttonAction,
    selectCity,
    homeFieldWarning,
    selectedcity,
  } = props;
  return (
    <StyledDiv>
      <div className="outer">
        <div className="middle">
          <div className="inner">
            <div className="whiteBackground">
              <img src={Emoji} alt="Hello" className="emoji" />
              <h1 className="header">Food Engine</h1>
              <h3 className="blurb">
                Set your city to start exploring restaurants around you
              </h3>
              <label htmlFor="favcity">
                <select
                  id="favcity"
                  name="select"
                  onChange={(e) => selectCity(e.target.value)}
                >
                  <option value={false}>Choose your City</option>
                  {getallOptions(listOfCities.cities)}
                </select>
              </label>
              {homeFieldWarning && selectedcity === false ? (
                <h2 className="warning">
                  <i
                    className="fa fa-exclamation-triangle"
                    style={{ marginRight: '5px' }}
                  ></i>
                  Please Select City!
                </h2>
              ) : (
                ''
              )}
              <button
                className="whiteButton"
                type="button"
                onClick={() => buttonAction()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};
SetCity.propTypes = {
  listOfCities: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  buttonAction: PropTypes.func,
  selectCity: PropTypes.func,
  homeFieldWarning: PropTypes.bool,
  selectedcity: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default SetCity;
