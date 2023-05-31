import axios from 'axios';
const imageBaseURL='https://image.tmdb.org/t/p/original'
const instance=axios.create({
    baseURL:'https://api.themoviedb.org/3'
})

export { instance,imageBaseURL};