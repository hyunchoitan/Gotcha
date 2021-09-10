import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from '../../Components/Section';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';

const Container = styled.div`
    padding: 3% 30px
    `

const Results = styled.h1`
    font-size: 2rem;
    font-weight:700;
    color: #FF3F00;
    margin-bottom:50px;
    text-transform:uppercase;
    `

const Form = styled.form`
    margin-bottom: 50px;
`
const Input = styled.input`
    all:unset;
    width: 100%;
    font-size: 2rem;
    text-transform:uppercase;
`


const SearchPresenter = ({movieResults, tvResults, searchTerm, error, loading, handleSubmit, updateTerm, savedTerm}) => (
    <Container>
        <Form onSubmit={handleSubmit}>
            <Input placeholder="
            What Do You Want To Watch Today?" value={searchTerm} onChange={updateTerm}/>
        </Form>
        {loading ? (
            <Loader/> 
        ): (
            <>
            {savedTerm && savedTerm.length>0 && (
                <Results>
                    {`Results for : ${savedTerm}`}
                </Results>
            )}
            {movieResults && movieResults.length>0 && 
                <Section title="Movies">
                    {movieResults.map(movie => <Poster
                        key={movie.id} 
                        id={movie.id} 
                        title={movie.title} 
                        imageUrl={movie.poster_path} 
                        rating={movie.vote_average} 
                        year={movie.release_date.substring(0,4)} 
                        isMovie={true}/>)}
                </Section>}
            
            {tvResults && tvResults.length>0 && (
            <Section title="Shows">
                    {tvResults.map(show=><Poster
                        key={show.id} 
                        id={show.id} 
                        title={show.name} 
                        imageUrl={show.poster_path} 
                        rating={show.vote_average} 
                        year={show.first_air_date? show.first_air_date.substring(0,4) : null} 
                        isMovie={false}/>)}
                </Section>)}
            {error && <Message color="#e74c3c" text={error}/>} 
            {movieResults && tvResults && movieResults.length === 0 && tvResults.length === 0 && <Message
            color="#95a5a6" text={`We can't find the result for ${savedTerm}`}/>}
            </>

        )}
    </Container>
    
)

SearchPresenter.propTypes = {
    movieResults: PropTypes.array, 
    tvResults: PropTypes.array, 
    searchTerm: PropTypes.string, 
    savedTerm: PropTypes.string,
    error: PropTypes.string, 
    loading: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
}

export default SearchPresenter;