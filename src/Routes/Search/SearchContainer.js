import React from "react";
import { moviesApi, tvApi } from '../../api';
import SearchPresenter from "./SearchPresenter";


class Search extends React.Component {
    state={
        movieResults: null,
        tvResults: null,
        searchTerm:"",
        savedTerm:"",
        error:null,
        loading:false
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { searchTerm } =  this.state;
        if(searchTerm !== "") {
            this.searchByTerm();
            this.setState({
                searchTerm:""
            })
        }
    }

    updateTerm = (event) => {
        const {
            target : {value}
        } = event;
        this.setState({
            searchTerm: value
        })
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
            this.saveTerm(searchTerm)
        }
    }

    saveTerm = (term) => {
        this.setState({
            savedTerm: term
        })
    }
    

    render(){
        const {movieResults, tvResults, searchTerm, error, loading, savedTerm } = this.state;
        return(
            <SearchPresenter
            movieResults={movieResults}
            tvResults={tvResults}
            searchTerm={searchTerm}
            error={error}
            loading={loading}
            savedTerm={savedTerm}
            handleSubmit={this.handleSubmit}
            updateTerm={this.updateTerm}
            />
        )
    }
}

export default Search;