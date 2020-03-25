import React from 'react';
import { connect } from 'react-redux';
import Spinner from '../layout/spinner/spinner.component';
import { fetchMovie, setLoading } from '../../redux/actions/search-actions';
import { Link } from 'react-router-dom';

class MovieSingle extends React.Component {
    componentDidMount() {
        //The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
        this.props.fetchMovie(this.props.match.params.id)
        this.props.setLoading();
    }
    render() {
        const { loading, movie } = this.props;

        let movieInfo = (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-4 col-lg-12 card card-body ">
                        <img src={movie.Poster} className="thumbnail" alt="Poster" />
                        <hr />
                        <h3>About </h3>
                        {movie.Plot}
                    </div>
                    <div className="col-xs-12 col-md-8 col-lg-12">
                        <h2 className="mb-3">{movie.Title}</h2>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <strong>Genre:</strong> {movie.Genre}
                            </li>
                            <li className="list-group-item">
                                <strong>Year:</strong> {movie.Year}
                            </li>
                            <li className="list-group-item">
                                <strong>Released:</strong> {movie.Released}
                            </li>
                            <li className="list-group-item">
                                <strong>Runtime:</strong> {movie.Runtime}
                            </li>
                            <li className="list-group-item">
                                <strong>Language:</strong> {movie.Language}
                            </li>
                            <li className="list-group-item">
                                <strong>Country:</strong> {movie.Country}
                            </li>
                            <li className="list-group-item">
                                <strong>Rated:</strong> {movie.Rated}
                            </li>
                            <li className="list-group-item">
                                <strong>IMDB Rating:</strong> {movie.imdbRating}
                            </li>
                            <li className="list-group-item">
                                <strong>Director:</strong> {movie.Director}
                            </li>
                            <li className="list-group-item">
                                <strong>Writer:</strong> {movie.Writer}
                            </li>
                            <li className="list-group-item">
                                <strong>Actors:</strong> {movie.Actors}
                            </li>
                            <li className="list-group-item">
                                <strong>Production:</strong> {movie.Production}
                            </li>
                            <li className="list-group-item">
                                <strong>BoxOffice:</strong> {movie.BoxOffice}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="card card-body bg-dark my-5 text-light ">
                        <div className="col-md-12 d-flex justify-content-center">

                            <a
                                href={'https://www.imdb.com/title/' + movie.imdbID}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                View on IMDB
                           </a>
                            <Link to="/" className="btn btn-default text-light">
                                Go Back To Search
                  </Link>
                        </div>
                    </div>
                </div>
            </div>
        );

        let content = loading ? <Spinner /> : movieInfo;
        return <div>{content}</div>;
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading,
    movie: state.movies.movie
})

export default connect(mapStateToProps, { fetchMovie, setLoading })(MovieSingle);
