import { ActionWithPayload, createReducer } from "../../redux/utils";
import { client, MoviesFilters } from "../../api/tmdb";
import { AppThunk } from "../../store";
import { genres } from "./genres";

export interface Movie {
    id: number;
    title: string;
    overview: string;
    popularity: number;
    image?: string;
}

export interface Genre {
  id: number;
  name: string;
}


interface MoviesState {
    top: Movie[];
    loading: boolean;
    page: number;
    hasMorePages: boolean;
    genres: Genre[];
}

const initialState: MoviesState = {
    top: [],
    loading: false,
    page: 0,
    hasMorePages: true,
    genres
};

function loading() {
  return {
      type: "movies/loading"
  };
}

function loaded(movies: Movie[], page: number, hasMorePages: boolean) {
  return {
      type: "movies/loaded",
      payload: { movies, page, hasMorePages }
  };
}

export const resetMovies = () => ({
  type: "movies/reset",
});
  
export function fetchNextPage(filters: MoviesFilters = {}): AppThunk<Promise<void>> {
  return async (dispatch, getState) => {
    const state = getState();
    const nextPage = state.movies.page + 1;
    dispatch(fetchPage(nextPage, filters)); 
  };
}

export function fetchPage(page: number, filters: MoviesFilters ): AppThunk<Promise<void>> {
  return async (dispatch) => {
    dispatch(loading());

    const configuration = await client.getConfiguration(); // todo: single load per app
    const moviesResponce = await client.getMovies(page, filters);
    const imageSize = "w780";
    const movies: Movie[] = moviesResponce.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        popularity: movie.popularity,
        image: movie.backdrop_path ? `${configuration.images.base_url}${imageSize}${movie.backdrop_path}` : undefined
    }));

    const hasMorePages = moviesResponce.page < moviesResponce.totalPages;

    dispatch(loaded(movies, page, hasMorePages));
  }
};

const moviesReducer = createReducer<MoviesState>(
  initialState,
  {
      "movies/loading": (state) => {
          return { ...state, loading: true };
      },
      "movies/loaded": (state, action: ActionWithPayload<{ movies: Movie[]; page: number; hasMorePages: boolean }>) => {
          return {
            ...state,
            top: [...state.top, ...action.payload.movies],
            page: action.payload.page,
            hasMorePages: action.payload.hasMorePages,
            loading: false,
          };
      },
      "movies/reset" : (state) => {
        return {...initialState }
      }
  });

export default moviesReducer;