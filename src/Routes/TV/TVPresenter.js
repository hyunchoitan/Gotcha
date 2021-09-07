import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TVPresenter = ({popular, topRated, airingToday, error, loading}) => null;

TVPresenter.propTypes = {
    popular:PropTypes.array, 
    topRated:PropTypes.array, 
    airingToday:PropTypes.array, 
    error:PropTypes.string, 
    loading:PropTypes.bool.isRequired
}

export default TVPresenter;