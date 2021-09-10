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


const TVPresenter = ({popular, topRated, airingToday, error, loading}) => 
    loading? (
        <Loader/>
    ) : (
        <Container>
            {!error && topRated && topRated.length>0 && (
                <Section title="Top Rated Shows">
                    {topRated.map(show => (
                        <Poster
                        key={show.id} 
                        id={show.id} 
                        title={show.name} 
                        imageUrl={show.poster_path} 
                        rating={show.vote_average} 
                        year={show.first_air_date.substring(0,4)} 
                        isMovie={false}/>
                    ))}
                </Section>
            )}
            {!error && popular && popular.length >0 && (
                <Section title="Popular Shows">
                    {popular.map(show => (
                        <Poster
                        key={show.id} 
                        id={show.id} 
                        title={show.name} 
                        imageUrl={show.poster_path} 
                        rating={show.vote_average} 
                        year={show.first_air_date.substring(0,4)} 
                        isMovie={false}/>
                    ))}
                </Section>
            )}
            {!error && airingToday && airingToday.length>0 && (
                <Section title="Shows Airing Today">
                    {airingToday.map(show => (
                        <Poster
                        key={show.id} 
                        id={show.id} 
                        title={show.name} 
                        imageUrl={show.poster_path} 
                        rating={show.vote_average} 
                        year={show.first_air_date.substring(0,4)} 
                        isMovie={false}/>
                    ))}
                </Section>
            )}
            {error && <Message color="#e74c3c" text={error}/>}
        </Container>
    )

TVPresenter.propTypes = {
    popular:PropTypes.array, 
    topRated:PropTypes.array, 
    airingToday:PropTypes.array, 
    error:PropTypes.string, 
    loading:PropTypes.bool.isRequired
}

export default TVPresenter;