import React from 'react';

import { connect } from 'react-redux';

import Spinner from '../layout/spinner/spinner.component';
import SearchFrom from './search-from.component';
import MoviesContainer from './movies-container.component';

const Landing = ({ loading }) => (
    // const { loading } = this.props; 
    <div className="container">
        <SearchFrom />
        {loading ? <Spinner /> : <MoviesContainer />}
    </div>

)


const mapStateToProps = state => ({
    loading: state.movies.loading
})

export default connect(mapStateToProps)(Landing);



// import React, { Component } from 'react';

// import { connect } from 'react-redux';

// import SearchForm from './SearchForm';
// import MoviesContainer from './MoviesContainer';
// import Spinner from '../layout/Spinner';

// export class Landing extends Component {
//   render() {
//     const { loading } = this.props;
//     return (
//       <div className="container">
//         <SearchForm />
//         {loading ? <Spinner /> : <MoviesContainer />}
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   loading: state.movies.loading
// });

// export default connect(mapStateToProps)(Landing);
