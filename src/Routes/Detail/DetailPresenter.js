import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';


const Container = styled.div`
    width: 100%;
    height: calc(100vh - 50px);
    position: relative;
`;

const Backdrop = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left : 0;
    background-image: url(${props=>props.bgUrl});
    background-size: cover;
    background-position: center center;
    filter: blur(3px);
    opacity: 0.5;
    z-index: -1;
    `;

const Content = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    z-index:1;
    padding: 0 30px;
`;



const Cover = styled.div`
    width: 35%;
    height: 90%;
    background-image: url(${props => props.bgUrl});
    background-size: cover;
    background-position: center;
    border-radius: 5px;
`;

const Data = styled.div`
    width: 60%;
    height: 80%;
    `;

const Title = styled.h1`
    font-size:2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;    
`;

const ItemContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 1rem;
    margin-bottom: 1.5rem;    
`;

const Item = styled.div``;

const ItemDevider = styled.div`
    padding: 0 7px;
`;

const Overview = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    text-align: justify;
    margin-bottom:1.5rem;

`;

const Video = styled.iframe`
    width: 90%;
    height: 50vh; 
    margin-bottom:1.5rem;
`;



const DetailPresenter = ({result, error, loading}) => 
    loading? <Loader/> : result && ( 
        <Container>
            <Backdrop bgUrl={result.backdrop_path? `https://image.tmdb.org/t/p/w500${result.backdrop_path}`
            : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"}/>
            <Content>
                <Cover bgUrl={result.poster_path? `https://image.tmdb.org/t/p/w500${result.poster_path}` 
                : "https://images.unsplash.com/photo-1560109947-543149eceb16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"}/>
                <Data>
                    <Title>{result.title? result.title :  result.name}</Title>
                    <ItemContainer>
                        <Item>{result.release_date? 
                        result.release_date.substring(0,4) : 
                        result.first_air_date.substring(0,4) }</Item>
                        <ItemDevider>•</ItemDevider>
                        <Item>{result.vote_average? `${result.vote_average} / 10` : ""}</Item>
                        <ItemDevider>•</ItemDevider>
                        <Item>{result.genres && result.genres.map((genre, index) => index === result.genres.length-1 ? 
                        genre.name : `${genre.name} / `)}</Item>
                    </ItemContainer>
                    <Overview>{result.overview}</Overview>
                    {result.videos.results.length >0 && <Video src={`https://www.youtube.com/embed/${result.videos.results[0].key}?autoplay=1`}/>}
                </Data>
            </Content>
        </Container>
    )

DetailPresenter.propTypes = {
    result:PropTypes.object, 
    error:PropTypes.string, 
    loading:PropTypes.bool.isRequired
}

export default DetailPresenter;