import Movie from './movieInterface'

export default interface State {

    allMovies: Movie[],
    favourites: Movie[],
    filteredMovies: Movie[]

}
