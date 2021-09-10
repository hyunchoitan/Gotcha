import React from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Container = styled.div`
`;

const ImageContainer = styled.div`

    `;

const Image = styled.div`
    height: 180px;
    background-image: url(${props => props.bgUrl});
    background-position: center;
    background-size: cover;
`;

const Title = styled.span`
    display: block;
`;

const Rating = styled.span``;

const Year = styled.span``;



const Poster = ({title, imageUrl, rating, year, id, isMovie=false}) => 
<Link to={isMovie? `/movie/${id}` : `/show/${id}`}>
    <Container>
        <ImageContainer>
            <Image bgUrl={imageUrl ? `https://image.tmdb.org/t/p/w500${imageUrl}`: null}/>
        </ImageContainer>
        <Rating><span role="img" aria-label="rating">⭐️</span>{` ${rating}/10`}</Rating>
        <Title>{title}</Title>
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