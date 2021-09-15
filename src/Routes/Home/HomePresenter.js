import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types"
import Section from '../../Components/Section';
import Poster from '../../Components/Poster';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';


const HomePresenter = ({tvOnTheAir, nowPlayingMovies, loading, error}) => null;

HomePresenter.propTypes = {
    tvOnTheAir: PropTypes.array, 
    nowPlayingMovies: PropTypes.array, 
    loading: PropTypes.bool.isRequired, 
    error: PropTypes.string
}

export default HomePresenter;