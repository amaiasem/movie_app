import movieActionTypes from './movieActionTypes'

type filterFavourites = {
    type: typeof movieActionTypes.FILTER_FAVOURITES,
    data: boolean
}

export type MovieActionTypes = filterFavourites;
