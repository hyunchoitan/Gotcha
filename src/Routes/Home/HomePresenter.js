import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from '../../Components/Section';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';

const Container = styled.div`
    padding: 3% 30px;
`

const HomePresenter = ({nowPlaying, upcoming, popular, error, loading}) => 
    loading? (
        <Loader/>
    ) : (
        <Container>
            {!error && nowPlaying && nowPlaying.length > 0 && (
                <Section title="Now Playing Movies">
                    {nowPlaying.map(movie => (
                        <span key={movie.id}>{movie.title}</span>
                    ))}
                </Section>
            )}
            {!error && upcoming && upcoming.length>0  && (
                <Section title="Upcoming Movies">
                    {upcoming.map(movie => (
                        <span key={movie.id}>{movie.title}</span>
                    ))}
                </Section>
            )}
            {!error && popular && popular.length >0 && (
                <Section title="Popular Movies">
                    {popular.map(movie => (
                        <span key={movie.id}>{movie.title}</span>
                    ))}
                </Section>
            )}
            {error && <Message color="#e74c3c" text={error}/>}
        </Container>
    ) 

HomePresenter.propTypes = {
    nowPlaying:PropTypes.array, 
    upcoming:PropTypes.array, 
    popular:PropTypes.array, 
    error:PropTypes.string, 
    loading:PropTypes.bool.isRequired 
}

export default HomePresenter;