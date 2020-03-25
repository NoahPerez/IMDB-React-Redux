//Actions are functions a type and payload and we import them 
// ex:  when we click on the search box that will initialize an action which is the search movie or fetch movies that will be the action will be trigged after we hit enter 
// so we here in actions we create a function which will call the API and then fetch the data and getting get me the data so the data will be passed into from the action into their Reducer and there 
// in the reducer will check the action type if it is movie. Fetch movie that the action types so it will set the movies state into the action payload.
import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, SET_LOADING } from './types';
import axios from 'axios';
import { APIKey } from '../../apiKey';

// dispatch is coming from our middleware 
// in dispatch we are dispatch action type and payload, that will make the reducer recognize our action
export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    });
};

export const fetchMovies = text => dispatch => {
    //in order to use your variable inside your string you need to make a template variable
    axios
        .get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
        .then(response => dispatch({
            type: FETCH_MOVIES, //folder types.js also imported 
            payload: response.data // Search only to get the Search Object  //response will be our response that contains our data
        })
        )
        .catch(err => console.log(err))
};

export const fetchMovie = id => dispatch => {
    //in order to use your variable inside your string you need to make a template variable
    axios
        .get(`http://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
        .then(response =>
            dispatch({
                type: FETCH_MOVIE, //folder types.js also imported 
                payload: response.data // Search only to get the Search Object  //response will be our response that contains our data
            })
        )
        .catch(err => console.log(err))
};

export const setLoading = () => {
    return {
        type: SET_LOADING,
    }
};




