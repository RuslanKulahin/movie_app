import { ActionWithPayload, createReducer } from "../redux/utils";
import { client } from "../api/tmdb";
import { AppThunk } from "../store";

export interface Movie {
    id: number;
    title: string;
    overview: string;
    popularity: number;
    image?: string;
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    original_language: string;
    original_title: string;
    poster_path: string;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface MoviesState {
    top: Movie[],
    loading: boolean
}

const initialState: MoviesState = {
    top: [
      ],
    loading: false
};

const moviesLoaded = (movies: Movie[]) => ({
    type: 'movies/loaded',
    payload: movies
});

const moviesLoading = () => ({
  type: "movies/loading"
});

export function fetchMovies(): AppThunk<Promise<void>> {
  return async (dispatch, getState) => {
    
    dispatch(moviesLoading());
    const config = await client.getConfiguration();
    const imageUrl = config.images.base_url;
    const results = await client.getNowPlaying();

    const mappedResults: Movie[] = results.map(m => ({
        id: m.id,
        title: m.title,
        overview: m.overview,
        popularity: m.popularity,
        image: m.backdrop_path ? `${imageUrl}w780${m.backdrop_path}` : undefined,
        adult: m.adult,
        backdrop_path: m.backdrop_path,
        genre_ids: m.genre_ids,
        original_language: m.original_language,
        original_title: m.original_title,
        poster_path: m.poster_path,
        release_date: m.release_date,
        video: m.video,
        vote_average: m.vote_average,
        vote_count: m.vote_count,
    }))

    dispatch(moviesLoaded(mappedResults));
  };
}

const moviesReducer = createReducer<MoviesState>(initialState,{
    "movies/loaded": (state: any, action: ActionWithPayload<Movie[]>) => {
      return {
        ...state,
        top: action.payload,
        loading: false
      }
    },
    "movies/loading": (state, action) => {
      return {
        ...state,
        loading: true,
      }
    }
  }
);

export default moviesReducer;