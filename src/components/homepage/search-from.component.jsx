import React from 'react'
import { searchMovie, fetchMovies, setLoading } from '../../redux/actions/search-actions';
import { connect } from 'react-redux'; // in order to use state when you have redux you need connect 




class SearchFrom extends React.Component {
    //we save the text, the input value into the text state so we can call the state here*
    onChange = e => {
        this.props.searchMovie(e.target.value);
    };

    // when we click it will fire this.props.fetchMovies well the actions 
    onSubmit = e => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text); //* we can call the state from here 
        this.props.setLoading();
    };

    render() {
        return (
            <div className="jumbotron jumbotron-fluid mt-5 text-center">
                <div className="container">
                    <h1 className="display-4 mb-3">
                        <i className="fa fa-search" /> Search for a movie ,TV series ..
          </h1>
                    <form id="searchForm" onSubmit={this.onSubmit}>
                        <input
                            type="text"
                            className="form-control"
                            name="searchText"
                            placeholder="Search Movies, TV Series ..."
                            onChange={this.onChange}
                        />
                        <button type="submit" className="btn btn-primary btn-bg mt-3">
                            Search
            </button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ //*
    // we need text from movies dot text 
    //The state is the global State object that contains all the states in our application 
    // movies is inside folder reducer index.js we have a movie:searchReducer that contains all our reducers so this is the movies object which contains all the searchReducer.js States 
    // the searchReducer.js contains States  that are initialStates but here we are only using text
    // text is pull out from here *
    text: state.movies.text
})



export default connect(mapStateToProps, { searchMovie, fetchMovies, setLoading })(SearchFrom);
