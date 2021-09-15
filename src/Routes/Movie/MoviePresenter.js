import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from '../../Components/Section';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';

const Container = styled.div`
    padding: 3% 30px;
`

const MoviePresenter = ({topRated, upcoming, popular, error, loading}) => 
    loading? (
        <Loader/>
    ) : (
        <Container>
            {!error && topRated && topRated.length > 0 && (
                <Section title="Now Playing Movies">
                    {topRated.map(movie => (
                        <Poster
                        key={movie.id} 
                        id={movie.id} 
                        title={movie.title} 
                        imageUrl={movie.poster_path} 
                        rating={movie.vote_average} 
                        year={movie.release_date.substring(0,4)} 
                        isMovie={true}/>
                    ))}
                </Section>
            )}
            {!error && upcoming && upcoming.length>0  && (
                <Section title="Upcoming Movies">
                    {upcoming.map(movie => (
                        <Poster
                        key={movie.id} 
                        id={movie.id} 
                        title={movie.title} 
                        imageUrl={movie.poster_path} 
                        rating={movie.vote_average} 
                        year={movie.release_date.substring(0,4)} 
                        isMovie={true}/>
                    ))}
                </Section>
            )}
            {!error && popular && popular.length >0 && (
                <Section title="Popular Movies">
                    {popular.map(movie => (
                        <Poster
                        key={movie.id} 
                        id={movie.id} 
                        title={movie.title} 
                        imageUrl={movie.poster_path} 
                        rating={movie.vote_average} 
                        year={movie.release_date.substring(0,4)} 
                        isMovie={true}/>
                    ))}
                </Section>
            )}
            {error && <Message color="#e74c3c" text={error}/>}
        </Container>
    ) 

MoviePresenter.propTypes = {
    topRated:PropTypes.array, 
    upcoming:PropTypes.array, 
    popular:PropTypes.array, 
    error:PropTypes.string, 
    loading:PropTypes.bool.isRequired 
}

export default MoviePresenter;