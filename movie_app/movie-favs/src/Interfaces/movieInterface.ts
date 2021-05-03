/* eslint-disable camelcase */
export default interface Movie {
    original_language: string,
    original_title: string,
    poster_path: string,
    video: boolean,
    vote_average: number,
    id: number,
    release_date: string,
    vote_count: number,
    title: string,
    name: string,
    adult: boolean,
    backdrop_path: string,
    overview: string,
    genre_ids: number[],
    popularity: number,
    media_type: string,
    watched: boolean
}
