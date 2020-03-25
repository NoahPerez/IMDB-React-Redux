import React from 'react'

import { connect } from 'react-redux';

import MovieCard from './movie-card.component';

class MoviesContainer extends React.Component {
    render() {
        const { movies } = this.props; //movies is a array 
        let content = '';

        // map is iterating thought the item of the array and give us the index of the item 
        // we are passing movies.map((movie, index)) => to <MovieCard>
        content = movies.Response === "True"
            ? movies.Search.map((movie, index) => <MovieCard key={index} movie={movie} />)
            : null;

        return (
            <div className="row">{content}</div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies
})

export default connect(mapStateToProps)(MoviesContainer);