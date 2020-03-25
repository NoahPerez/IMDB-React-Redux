import { combineReducers } from 'redux';
import searchReducer from './search-reducer';

export default combineReducers({
    movies: searchReducer    // it will contain all the search reducers states 
});

