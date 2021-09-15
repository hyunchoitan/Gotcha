import React from "react";
import { tvApi } from '../../api';
import { moviesApi } from '../../api';
import HomePresenter from '../Home/HomePresenter';

class Home extends React.Component {
    state = {
        tvOnTheAir: null,
        nowPlayingMovies: null,
        loading: true,
        error:null
    }

    async componentDidMount() {
        try{
        const { data :
            { results : nowPlayingMovies }} = await moviesApi.nowPlaying()
        const { data :
            { results : tvOnTheAir }} = await tvApi.onTheAir()
        
        this.setState({
            nowPlayingMovies, tvOnTheAir
        })

        }catch{
            this.setState({
                error: "We can't find the result"
            })
        }finally{
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const {tvOnTheAir, nowPlayingMovies, loading, error} =  this.state;

        return (<HomePresenter 
        tvOnTheAir={tvOnTheAir} 
        nowPlayingMovies={nowPlayingMovies} 
        loading={loading} 
        error={error}
        />)
    }
} 

export default Home;