import React from "react";
import MoviePresenter from "./MoviePresenter";
import {moviesApi} from "../../api"

class Movie extends React.Component {
    state = {
        topRated : null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true
    }

    async componentDidMount() {
        try{
            const {
                data :{ results : topRated }
            } = await moviesApi.topRated()
            const {
                data : { results : upcoming }
            } = await moviesApi.upcoming()
            const {
                data : { results : popular}
            } = await moviesApi.popular()

            this.setState(
                { topRated, upcoming, popular}
            )

        }catch{
            this.setState({
                error: "We can't find movies"
            })

        }finally{
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const {topRated, upcoming, popular, error, loading} = this.state;
        return(
            <MoviePresenter 
            topRated={topRated}
            upcoming={upcoming}
            popular={popular}
            error={error}
            loading={loading}
            />
        )
    }

}

export default Movie;

