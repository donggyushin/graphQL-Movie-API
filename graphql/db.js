import axios from "axios";

const API_URL = "https://yts.am/api/v2/list_movies.json?limit=50";
const API_DETAIL_URL = "https://yts.am/api/v2/movie_details.json";
const API_SUGGESTIONS_URL = "https://yts.am/api/v2/movie_suggestions.json";

export const getSuggestions = id => {
  return axios
    .get(API_SUGGESTIONS_URL, {
      params: {
        movie_id: id
      }
    })
    .then(res => res.data)
    .then(json => json.data.movies);
};

export const getMovies = () => {
  return axios
    .get(API_URL)
    .then(res => res.data)
    .then(json => json.data.movies);
};

export const getMovie = id => {
  return axios
    .get(API_DETAIL_URL, {
      params: {
        movie_id: id
      }
    })
    .then(res => res.data)
    .then(json => json.data.movie);
};
