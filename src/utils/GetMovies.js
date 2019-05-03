

import axios from "axios";
import { apiKey } from "./Store.js"



const get90sAction = (row) => {
    axios.get(
        'https://api.themoviedb.org/3/discover/movie?api_key='
        + apiKey +
        '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=28&append_to_response=videos'
    )
        .then(res => (row = res.data.results))
        .catch(err => console.log(err));
        return row
}

export { get90sAction }