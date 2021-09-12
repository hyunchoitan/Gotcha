import React from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Container = styled.div`
`;



const Image = styled.div`
    height: 180px;
    background-image: url(${props => props.bgUrl});
    background-position: center center;
    background-size: cover;
    transition: opacity 0.2s linear;
`;

const Title = styled.span`
    display: block;
    font-size: 0.9rem;
    margin-bottom: 7px;
`;

const Rating = styled.span`
    font-size: 0.9rem;
    position: absolute;
    bottom: 5px;
    right: 5px;
    opacity: 0;
    transition: opacity 0.2s linear;
`;

const Year = styled.span``;

const ImageContainer = styled.div`
    position: relative;
    &:hover {
        ${Image}{
            opacity: 0.3;
        }
        ${Rating}{
            opacity: 1;
        }
    }
    margin-bottom: 10px;
    `;



const Poster = ({title, imageUrl, rating, year, id, isMovie=false}) => 
<Link to={isMovie? `/movie/${id}` : `/show/${id}`}>
    <Container>
        <ImageContainer>
            <Image bgUrl={imageUrl ? `https://image.tmdb.org/t/p/w500${imageUrl}` 
            : "https://images.unsplash.com/photo-1560109947-543149eceb16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"}/>
            <Rating><span role="img" aria-label="rating">⭐️</span>{` ${rating}/10`}</Rating>
        </ImageContainer>
        <Title>{title.length>14 ? `${title.substring(0,14)}...` : title}</Title>
        <Year>{year}</Year>
    </Container>
</Link>

Poster.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    rating: PropTypes.number,
    id: PropTypes.number.isRequired,
    year: PropTypes.string,
    isMovie: PropTypes.bool
}

export default Poster;