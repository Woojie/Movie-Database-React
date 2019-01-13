import axios from 'axios'

export const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
})

export const tmdbMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/'
})