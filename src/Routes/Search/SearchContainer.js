import React from "react";
import { moviesApi, tvApi } from '../../api';
import SearchPresenter from "./SearchPresenter";


class Search extends React.Component {
    state={
        movieResults: null,
        tvResults: null,
        searchTerm:"",
        error:null,
        loading:false
    }

    handleSubmit = () => {
        const { searchTerm } =  this.state;
        if(searchTerm !== "") {
            this.searchByTerm();
        }
    }

    searchByTerm = async() => {
        const {searchTerm} = this.state;
        this.setState({
            loading: true
        })
        try{
            const {
                data : { results: tvResults}
            } = await tvApi.search(searchTerm)
            const {
                data : { results: movieResults}
            } = await moviesApi.search(searchTerm)

            this.setState({
                movieResults, tvResults
            })
        }catch{
            this.setState({
                error: "We can't find the result:("
            })
        }finally{
            this.setState({
                loading : false
            })
        }
    }



    render(){
        const {movieResults, tvResults, searchTerm, error, loading } = this.state;
        return(
            <SearchPresenter
            movieResults={movieResults}
            tvResults={tvResults}
            searchTerm={searchTerm}
            error={error}
            loading={loading}
            handleSubmit={this.handleSubmit}
            />
        )
    }
}

export default Search;