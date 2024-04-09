import { combineReducers } from "redux";
import moviesReducer from "./features/Movies/moviesSlise";

const rootReducer = combineReducers({ movies: moviesReducer });

export default rootReducer;