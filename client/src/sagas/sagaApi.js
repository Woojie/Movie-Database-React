import axios from 'axios'


export const getPeopleData = () => axios.get('https://api.themoviedb.org/3/person/popular?api_key=c62a78a0d2d87be14d317940c5c290b5&language=en-US&page=1')